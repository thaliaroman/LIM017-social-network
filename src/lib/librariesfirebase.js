import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { app } from "./configurationfirebase.js";
export const auth = getAuth();
export const db = getFirestore();
try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

//con esta funcion va a crear usuario con su e-mail y contraseña//
// export const firstRegister =(username,email,password)=>{
//     createUserWithEmailAndPassword (username,email, password)
//     .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });