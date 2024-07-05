import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import {
  getFirestore,
  setDoc,
  doc,
  serverTimestamp,
  // addDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

function ProfileCreate(user) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const realtimedb = getDatabase(app);
  let bioCondition;
  const rdbRef = ref(realtimedb, "Prompts");
  onValue(rdbRef, (snapshot) => {
    bioCondition = snapshot.val().bioConditions;

  });
  const navigate = useNavigate();
  let userUID;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {

        navigate("/");
      } else {
        userUID = user.uid;
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
    systemInstruction: `${bioCondition}`,
  });

  const generationConfig = {
    temperature: 0.75,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65,
    responseMimeType: "text/plain",
  };

  async function run(userInput) {
    const chatSession = model.startChat({
      generationConfig,
    });

    const result = await chatSession.sendMessage(userInput);
    setGenSkills(result.response.text());
    // console.log(genSkills);
  }



  const handleProfileData = () => {
    run(skillsInput);
    console.log("Profile data")
    const docref = doc(db, "user", `${userUID}`);
    try {
      setDoc(docref, {
        "fullName": `${Name}`,
        "profilePicture": "url_to_profile_picture",
        "contactInformation": {
          "email": "john.doe@example.com",
          "phoneNumber": "123-456-7890",
          "address": {
            "city": "New York",
          }
        },
        "profileInfo": {
          "bio": `${genSkills}`,
          "experience": [
            {
              "title": "Senior Software Engineer",
              "company": "Tech Solutions Inc.",
              "description": "Led a team of developers in building scalable web applications..."
            },
            {
              "title": "Software Engineer",
            }
          ],
          "education": [
            {
              "degree": "Bachelor of Science in Computer Science",
            }
          ],
          "certifications": [
            {
              "name": "AWS Certified Solutions Architect - Associate",
            }
          ]
        }
      }
      )
    } catch (e) {
      console.log(error);
    }

  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout successfull");
      })
      .catch((error) => {
        console.log(error);
        console.log(error);
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