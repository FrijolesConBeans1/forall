
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// Your config
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
const db = getFirestore(app);

function loadPostPage() {
     window.location.href = "postPage.html";
}

document.getElementById("seePostsBtn").addEventListener("click", loadPostPage);

