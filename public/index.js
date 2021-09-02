import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';


var provider_btn = document.querySelector("#provider_btn");
var auth_msg = document.querySelector("#auth_msg");
var user_name = document.querySelector("#user_name");
var user_dp = document.querySelector("#user_dp");

const config = {
    apiKey: "AIzaSyCiUPzj8pODh1yxkRG-0b8aw4PIf8FLnjQ",
    authDomain: "learningfirebase-fab8a.firebaseapp.com",
    databaseURL: "https://learningfirebase-fab8a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "learningfirebase-fab8a",
    storageBucket: "learningfirebase-fab8a.appspot.com",
    messagingSenderId: "207612231717",
    appId: "1:207612231717:web:7f6ca209463b8858eb3fcc",
    measurementId: "G-Q8CCV5JM5Q"
};

const firebaseApp = initializeApp(config);





const auth = getAuth(firebaseApp);

const providerGoogle = new GoogleAuthProvider();



var logged_in = false;
provider_btn.addEventListener("click", () => {
    const user;
    if(logged_in){
        signOut(auth).then(()=>{
            auth_msg.textContent = "Sign In with Google";
            user_name.textContent = "Hi User!, Please Sign In with Google to see your data.";
            user_dp.style = "display : none";
            logged_in = false;
        }).catch((error) => {
            auth_msg.textContent = "An error happend. Please try again.";
            console.log(error);
        });
    }
    else{
        signInWithPopup(auth, providerGoogle).then(
            (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(result);
                console.log(result.user);
                user_dp.style = "display : inline";
                user_dp.src = `${result.user.photoURL}`;
                user = result.user.email;
                user_name.textContent = `Hello, ${result.user.firstName}`;
                auth_msg.textContent = "Sign Out";
                logged_in = true;
            }).catch((error) => {
                auth_msg.textContent = "An error occurred while Sign In. Please try again.";
                console.log(error);
            }
        );
    }
    const user_data_snap = await getDoc(doc(db, "users", `${user}`));
    console.log(user_data_snap);
    console.log(user_data_snap.data());
})