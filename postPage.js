import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// 🔥 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCRTovQijYDSEZl026qn4quJMNMl_zRFgg",
  authDomain: "confession-5865b.firebaseapp.com",
  projectId: "confession-5865b",
  storageBucket: "confession-5865b.firebasestorage.app",
  messagingSenderId: "84451986940",
  appId: "1:84451986940:web:6cb717221682d76a8d3679"
};


// 🔥 Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
signInAnonymously(auth);
const db = getFirestore(app);

// 🔥 Auto expand textarea
const textarea = document.getElementById("messagePost");
textarea.addEventListener("input", () => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
});

let clicked = null;


const postBtn = document.querySelector(".postBtn");
postBtn.addEventListener("click", async () => {
  const title = document.getElementById("titlePost").value;
  const message = document.getElementById("messagePost").value;

  if (!title || !message) return;

  try {
    await addDoc(collection(db, "posts"), {
      title,
      message,
      createdAt: Date.now()
    });

    // clear inputs
    document.getElementById("titlePost").value = "";
    document.getElementById("messagePost").value = "";

    loadPosts(); // reload posts

  } catch (err) {
    console.error("Error adding post:", err);
  }
});

async function loadReplies() {
  
  
}

async function loadPosts() {
  const container = document.getElementById("postContainer");
  container.innerHTML = "";

  try {
    const q = collection(db, "posts");
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const dataId = data.createdAt;
      const post = document.createElement("div");
      post.className = "posts";

      post.innerHTML = `
        <div class="titlePost">${data.title}</div>
        <p class="messagePost">${data.message}</p>
        <div class="postBtns">
          <button class="replyBtn" >Reply</button>
          <button class="showRepBtn">Show Replies</button>
          <button class="likeBtn unClicked"></button>
        </div>
        <div class="postReplies" ></div>

      `;

      container.appendChild(post);
    });

    



  } catch (err) {
    console.error("Error loading posts:", err);
  }
}



// 
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("likeBtn")) {
    e.target.classList.toggle("clicked");
    e.target.classList.toggle("unClicked");
  }
});

loadPosts();