import "../App.css";
import { app } from "../firebase";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
function Home() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  // const navigate = useNavigate();
  const [userUID, setUserData] = useState("");
  const [userMail, setUserMail] = useState("");
  useEffect(() => {
    async function getData(userUID) {
      try {
        const docRef = doc(db, "user", userUID);
        const docSnap = await getDoc(docRef);
        let userDocument = docSnap.data();
        if (userDocument) {
          if (userDocument.role == "seeker") {
            console.log("Navigate to Seeker panel");
          } else if (userDocument.role == "recruiter") {
            console.log("Navigate to Recruiter Pane;");
          } else {
            console.log("no role found");
          }
          return docSnap.data();
        } else {
          console.log("No user data found for:", userMail, userUID);
          return null;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Re-throw the error for handling at a higher level
      }
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user.uid);
        setUserMail(user.email);
        try {
          getData(userUID);
        } catch (error) {
          console.log(error);
        }
      } else {
        setUserData(null);
        console.log("No user");
      }
    });
  }, [auth, db, userUID, userMail]);
  const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
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
    <div className="Container">
      <button id="signin" onClick={signInUser}>
        {" "}
        Sign In
      </button>
      <button id="signout" onClick={signOutUser}>
        Sign Out
      </button>
    </div>
  );
}

export default Home;
