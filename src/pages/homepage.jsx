import {
    getAuth,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { app } from "../firebase";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Homepage() {
    const navigate = useNavigate();
    const db = getFirestore(app);
    const auth = getAuth(app);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
            }

            async function loadUserData() {
                const docRef = doc(db, "user", `${user.uid}`);
                try {
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        let skills = docSnap.data().Skills;
                        let userSkills = document.getElementById('bio');
                        userSkills.innerText = `${skills}`;
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            loadUserData();

        })
    }, [auth]);


    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                console.log("No user");
            });
    };


    return (
        <>
            <h1>
                Welcome back
            </h1>
            <button id="signout" onClick={signOutUser}> Sign Out</button>
            <p id="bio"> </p>

        </>
    )
}

export default Homepage;