import { app } from "../firebase";

import { getFirestore, doc, getDoc, collection, getDocs, setDoc, addDoc } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
function Post(userUID) {
  const auth = getAuth(app);
  let UID;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      UID = user.uid;
    })
  })
  const db = getFirestore(app);
  function genRandom() {
    let genNumber = 0;
    for (let index = 0; index < 15; index++) {
      genNumber = Math.floor(Math.random() * 999999999999) + 1;
    }
    return genNumber;
  }

  let postID = genRandom();
  console.log(postID);
  let [postData, setPostData] = useState("");
  const handlePostInput = (event) => setPostData(event.target.value);

  const handlePostData = () => {
    const docRef = doc(db, "post", `${UID}`);
    try {
      setDoc(docRef, {
        posts:
          [{
            "postDetail": `${postData}`, "UID": `${UID}`
          }]
        ,
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="post-container">
        <input type="text" onChange={handlePostInput} />
        <button onClick={handlePostData}>Post</button>
      </div>
    </>
  );
}

export default Post;
