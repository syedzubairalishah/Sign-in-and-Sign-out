// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBjAyvYNufQfyjZtLKNbKu0Wx0_8-Uwh4",
  authDomain: "shah-jee-b7611.firebaseapp.com",
  projectId: "shah-jee-b7611",
  storageBucket: "shah-jee-b7611.appspot.com",
  messagingSenderId: "264178943167",
  appId: "1:264178943167:web:159fa1d0cfad538382b20a",
  measurementId: "G-Z031HNXJEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log("app==>",app)

const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// console.log("auth==>",auth);

const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");

const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");

const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("logout_btn");
const auth_container = document.getElementById("auth_container");
const user_container = document.getElementById("user_container");

signup_btn.addEventListener("click",createUserAccount)
signin_btn.addEventListener("click",createdUserAccount)
logout_btn.addEventListener("click",logout)
  
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is log in=>");
        const uid = user.uid;
        user_container.style.display = "block";
        // auth_container.style.display = "none";
        user_email.innerText = user.email;
      // ...
    } else {
        console.log("User is not log in=>");
        auth_container.style.display = "block";
        // user_container.style.display = "none";
    }
  });

function createUserAccount(){
    // console.log("email",signup_email.value);
    // console.log("password",signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user=>",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}

function createdUserAccount(){
    // console.log("email",signup_email.value);
    // console.log("password",signup_password.value);
    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user=>");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

function logout(){
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}