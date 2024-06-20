import "../App.css";
import { app } from "../firebase";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/profilecreation");
      } else {
        console.log("No user");
      }
    });
  });

  const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then(() => {
        // console.log("signed in");
        // <Navigate to={"/profilecreation"}></Navigate>;
      })
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
  let userData = [];

  useEffect(() => {
    function queryDB() {
      const age = 22;
      const q = query(collection(db, "Recruiter"), where("age", "<", `${age}`));
      getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            userData.push(data);
          });
          console.log("Matching users:", userData);
        })
        .catch((error) => {
          console.error("Error retrieving users:", error);
        });
    }
    queryDB();
  }, []);

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
