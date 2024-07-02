import "../App.css";
import { app } from "../firebase";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCreate from "./profileCreate";
function Home() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [userUID, setUserUID] = useState("");
  const [userMail, setUserMail] = useState("");
 let  userInfo = {
    UID: userUID,
    Email: userMail,
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUserUID(user.uid);
        setUserMail(user.email);
        navigate('/profilecreation', { state: userInfo });
      } else {
        console.log("No user");
      }
    });
  }, [auth])

  console.log(userMail, userUID);
  const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {

    }).catch((error) => {
      console.log(error);
    })
  }

  const signOutUser = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        console.log(error);
        console.log("No user");
      });
  };
  return (
    <div className="Container">
      <button id="signin" onClick={signInUser}>Sign In</button>
      <button id="signout" onClick={signOutUser}> Sign Out</button>
    </div>
  );
}

export default Home;
