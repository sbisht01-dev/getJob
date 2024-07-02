import {
    getAuth,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { app } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Homepage() {
    const navigate = useNavigate();
    const auth = getAuth(app);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
            }
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

        </>
    )
}

export default Homepage;