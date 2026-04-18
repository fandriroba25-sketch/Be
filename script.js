// Import Firebase (pakai CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// Config Firebase kamu
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT.firebaseapp.com",
  databaseURL: "https://PROJECT.firebaseio.com",
  projectId: "PROJECT",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Kirim perintah
function sendCommand(cmd) {
  set(ref(db, 'device/status'), cmd);
}

// Terima perintah
onValue(ref(db, 'device/status'), (snapshot) => {
  const data = snapshot.val();
  document.getElementById("status").innerText = "Status: " + data;
});
