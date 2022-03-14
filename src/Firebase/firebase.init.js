import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;