import {
  getFirestore,
  setDoc,
  doc,
  serverTimestamp,
  // addDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

function ProfileCreate(user) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  let userUID;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {

        navigate("/");
      } else {
        userUID = user.uid;
        console.log(userUID);
      }
    });
  });
  let [Name, setName] = useState("");
  let [Age, setAge] = useState("");
  let [DOB, setDOB] = useState("");
  let [XP, setXP] = useState("");
  let [userRole, setUserRole] = useState("");
  let [skillsInput, setUserSkills] = useState("");
  let [genSkills, setGenSkills] = useState("");

  const handleName = (event) => setName(event.target.value);
  const handleAge = (event) => setAge(event.target.value);
  const handleDOB = (event) => setDOB(event.target.value);
  const handleXP = (event) => setXP(event.target.value);
  const handleUserRole = (event) => setUserRole(event.target.value);
  const handleUserSkills = (event) => setUserSkills(event.target.value);

  const apiKey = import.meta.env.VITE_GPT_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Given a list of skills separated by commas and a list of hobbies separated by commas, generate a concise and professional bio (maximum 3-4 sentences) for a user on a job-seeker platform.Bio Content:Identify the top 3 most relevant skills for the job market from the provided list.Choose one interesting hobby that showcases a transferable skill or personality trait valuable for the job market.If any Additional Information is provided, incorporate it into the bio only if it significantly strengthens the overall message.Bio Style:Maintain a professional tone and positive language.Focus on action verbs and specific skills.Keep the bio concise and engaging(avoid jargon or overly technical terms. ).",
  });

  const generationConfig = {
    temperature: 0.75,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 75,
    responseMimeType: "text/plain",
  };

  async function run(userInput) {
    const chatSession = model.startChat({
      generationConfig,
    });

    const result = await chatSession.sendMessage(userInput);
    setGenSkills(result.response.text());
    console.log(genSkills);
  }



  const handleProfileData = () => {
    run(skillsInput);
    console.log("Profile data")
    const docref = doc(db, "user", `${userUID}`);
    try {
      setDoc(docref, {
        Name: `${Name}`,
        Age: `${Age}`,
        DOB: `${DOB}`,
        XP: `${XP}`,
        Role: `${userRole}`,
        timestamp: serverTimestamp(),
        Skills:`${genSkills}`
      });
      console.log("Data Sent");
    } catch (e) {
      console.log(e);
    }
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("signout");
      })
      .catch((error) => {
        console.log(error);
        console.log("No user");
      });
  };

  return (
    <>
      <form className="form">
        <input type="text" onChange={handleName} placeholder="Name" />
        <input type="text" onChange={handleAge} placeholder="Age" />
        <input type="date" onChange={handleDOB} placeholder="DOB" />
        <input type="text" onChange={handleXP} placeholder="Experience" />
        <input type="text" onChange={handleUserSkills} placeholder="Skill" />
        <div>
          <input
            type="radio"
            name="userrole"
            value="Recruiter"
            id="recruiter"
            onClick={handleUserRole}
          />
          <label className="form-label" htmlFor="recruiter">
            Recruiter
          </label>
          <input
            type="radio"
            name="userrole"
            value="Seeker"
            id="seeker"
            onClick={handleUserRole}
          />
          <label htmlFor="seeker">Seeker</label>
        </div>
      </form>

      <button onClick={handleProfileData}>Submit</button>
      <button onClick={signOutUser}>Sign Out</button>
    </>
  );
}

export default ProfileCreate;