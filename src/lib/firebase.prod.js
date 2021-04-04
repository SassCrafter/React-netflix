import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'


// Seed the databse

// Config
var firebaseConfig = {
    apiKey: "AIzaSyBIkQZ3bo4lU7bIiWzGwxTx0owMr3E1Wso",
    authDomain: "netflix-clone-59138.firebaseapp.com",
    projectId: "netflix-clone-59138",
    storageBucket: "netflix-clone-59138.appspot.com",
    messagingSenderId: "644729131527",
    appId: "1:644729131527:web:38a31964067ce320a310a2"
  };
  // Initialize Firebase
  const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };