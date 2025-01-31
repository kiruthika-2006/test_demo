// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyDZcNkMTKHiGk8EpgmXagP4oDzsTHO1bPM",
    authDomain: "goki-8873c.firebaseapp.com",
    projectId: "goki-8873c",
    storageBucket: "goki-8873c.firebasestorage.app",
    messagingSenderId: "336805574059",
    appId: "1:336805574059:web:47538c3952c49573de8eee",
    measurementId: "G-MNN7Z026ET"
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
