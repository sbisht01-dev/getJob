import "../App.css";
import { app } from "../fierbase";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Profile from "../components/profile";
import ProfileCreate from "./profileCreate";
import Blank from "./blank";
function Home() {
  const auth = getAuth(app);
  const [currentUser, setUser] = useState("");
  const [userImage, setImageURL] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        console.log(currentUser.photoURL);
        setImageURL(currentUser.photoURL);
      } else {
        console.log("No user");
      }
    });
  });

  const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser("");
        setImageURL("");
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
      <Profile userPhoto={userImage} />
      {currentUser ? <ProfileCreate user={currentUser} /> : <Blank />}
    </div>
  );
}

export default Home;
