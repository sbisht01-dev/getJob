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
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [userUID, setUserUID] = useState("");
  const [userMail, setUserMail] = useState("");
  let userInfo = {
    UID: userUID,
    Email: userMail,
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        async function checkUser() {
          console.log(userUID);
          const docRef = doc(db, "user", `${user.uid}`);
          try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              navigate('/homepage');
            } else {
              navigate('/profilecreation', { state: userInfo });
            }
          } catch (error) {
            console.log(error)
          }
        }
        checkUser();
      } else {
        console.log("No user");
      }
    });
  }, [auth]);

  const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      setUserMail(user.email);
      setUserUID(user.uid);
    }).catch((error) => {
      console.log(error);
    })
  }

  const signOutUser = () => {
    signOut(auth)
      .then(() => {

      })
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
