import {
    getAuth,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { app } from "../firebase";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../components/post";
function Homepage() {
    const navigate = useNavigate();
    const db = getFirestore(app);
    const auth = getAuth(app);
    let UID;
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
            } else {
                UID = user.uid;
            }
            async function loadUserData() {
                const docRef = doc(db, "user", `${user.uid}`);
                try {
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        // console.log(docSnap.data());
                        let userData = docSnap.data();
                        let userSkills = document.getElementById('bio');
                        let name = document.getElementById('name');
                        userSkills.innerText = `${userData.profileInfo.bio}`;
                        name.innerText = `${userData.profileInfo.fullName}`
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
            {/* <h1>
                Welcome back
            </h1>
            <h3 id="name"></h3> */}
            {/* <p id="bio"> </p> */}
            <button id="signout" onClick={signOutUser}> Sign Out</button>
            <Post userUID={UID} />
        </>
    )
}

export default Homepage;