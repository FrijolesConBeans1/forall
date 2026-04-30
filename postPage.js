

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRTovQijYDSEZl026qn4quJMNMl_zRFgg",
  authDomain: "confession-5865b.firebaseapp.com",
  projectId: "confession-5865b",
  storageBucket: "confession-5865b.firebasestorage.app",
  messagingSenderId: "84451986940",
  appId: "1:84451986940:web:6cb717221682d76a8d3679",
  measurementId: "G-JRZRGNEDNR"
};



// Initialize
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
signInAnonymously(auth);
const db = getFirestore(app);


const textarea = document.getElementById("messagePost");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto";              // reset height
  textarea.style.height = textarea.scrollHeight + "px"; // expand
});


const likeButtons = document.querySelectorAll(".likeBtn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("clicked");
    btn.classList.toggle("unClicked");
  });
});



const createPost = document.getElementById('postBtn');
createPost.forEach((btn) => {
  
});


