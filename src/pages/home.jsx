import "../App.css";
import { app } from "../fierbase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function Home() {
  const auth = getAuth(app);
  const [currentUser, setUser] = useState("");
  

  useEffect(() => {
    const dbFirestore = getFirestore();
    const colRef = collection(dbFirestore, "FDn1ocMHMlkThQXghpqR");
    getDocs(colRef)
      .then((snapshot) => {
        const users = snapshot.docs.map((docs) => docs.data());
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(currentUser.photoURL);
      } else {
        console.log("No user");
      }
    });
  });
  useEffect(() => {
    let button = document.getElementById("signin");
    button.addEventListener("click", signInUser);
  });

  useEffect(() => {
    const signOutButton = document.getElementById("signout");
    if (signOutButton) {
      signOutButton.addEventListener("click", signOutUser);
      return () => {
        signOutButton.removeEventListener("click", signOutUser);
      };
    }
  });
  const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        console.log(error);
        console.log("No user");
      });
  };

  return (
    <div className="Container">
      <button id="signin"> Sign In</button>
      <button id="signout">Sign Out</button>
      {/* <Profile user={currentUser} /> */}
    </div>
  );
}

export default Home;
