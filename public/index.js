import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChange, signInWithPopop, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'

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


