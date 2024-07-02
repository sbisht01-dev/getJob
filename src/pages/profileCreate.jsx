import { useLocation } from "react-router-dom";
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
function ProfileCreate(user) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  let [Name, setName] = useState("");
  let [Age, setAge] = useState("");
  let [DOB, setDOB] = useState("");
  let [XP, setXP] = useState("");
  const [userRole, setUserRole] = useState(""); // Initial state for user role

  const handleName = (event) => setName(event.target.value);
  const handleAge = (event) => setAge(event.target.value);
  const handleDOB = (event) => setDOB(event.target.value);
  const handleXP = (event) => setXP(event.target.value);
  const handleUserRole = (event) => setUserRole(event.target.value);
  // console.log(Name);
  const handleProfileData = () => {
    console.log("Profile data")
    const docref = doc(db, "user", `${userData.UID}`);
    try {
      setDoc(docref, {
        Name: `${Name}`,
        Age: `${Age}`,
        DOB: `${DOB}`,
        XP: `${XP}`,
        Role: `${userRole}`,
        Post: "akjrfaksjfn ",
        timestamp: serverTimestamp(),
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
        <input type="text" onChange={handleXP} placeholder="XP" />{" "}
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
