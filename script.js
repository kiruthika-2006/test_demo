// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCD0tvWyj0SWWxKuo5VdN0-b33bUEcqzjE",
  authDomain: "fir-5bec0.firebaseapp.com",
  projectId: "fir-5bec0",
  storageBucket: "fir-5bec0.firebasestorage.app",
  messagingSenderId: "897328009638",
  appId: "1:897328009638:web:e77a2ffbca6f0d4152bf67"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function displayFirestoreData() {
    try {
        const collectionRef = collection(db, "test"); 
        const querySnapshot = await getDocs(collectionRef);

        const listElement = document.getElementById("data-list");
        listElement.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log("Firestore Document:", data);
            const listItem = document.createElement("li");
            let docContent = `ID: ${doc.id}, `;
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    docContent += `${key}: ${data[key]}, `;
                }
            }
            
            listItem.textContent = docContent.slice(0, -2);
            listElement.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching Firestore data:", error);
    }
}

// Call function when page loads
window.onload = displayFirestoreData;
