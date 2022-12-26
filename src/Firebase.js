// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgHVvtcUq2yxj_79duexZIEp_TirZ3SDU",
    authDomain: "zenith-quiz-app.firebaseapp.com",
    projectId: "zenith-quiz-app",
    storageBucket: "zenith-quiz-app.appspot.com",
    messagingSenderId: "669328938373",
    appId: "1:669328938373:web:495f764f4800e9888a60ec",
    measurementId: "G-H74QV5CL3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;