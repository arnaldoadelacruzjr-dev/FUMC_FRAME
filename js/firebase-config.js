import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBxK3yzjdaSuzpe12690GU3z8QRaYN_Pfs",
    authDomain: "fumc-frame-creator-2026.firebaseapp.com",
    projectId: "fumc-frame-creator-2026",
    storageBucket: "fumc-frame-creator-2026.firebasestorage.app",
    messagingSenderId: "666045890217",
    appId: "1:666045890217:web:a82ddd5c2ad5b84352b3b8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
