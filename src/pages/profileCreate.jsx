import {
  getFirestore,
  setDoc,
  doc,
  // addDoc,
} from "firebase/firestore";

import { useState } from "react";

import { app } from "../fierbase";
function ProfileCreate(user) {
  const db = getFirestore(app);
  let [Name, setName] = useState("");
  const handleName = (event) => setName(event.target.value);
  console.log(Name);
  const handleProfileData = () => {
    console.log(user.user.uid);
    const docref = doc(db, "Recruiter", user.user.uid);
    try {
      setDoc(docref, {
        first: `${Name}`,
      });
    } catch (e) {
      console.log(e);
    }
  
  };

  return (
    <>
      <div className="form" id="form">
        <input type="text" onChange={handleName} />
        <button onClick={handleProfileData}>Submit</button>
      </div>
    </>
  );
}

export default ProfileCreate;
