import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC55aBm61fX0w9vOqGxXaEMAlLBKN5GErM",
  authDomain: "netflix-clone-6af2b.firebaseapp.com",
  projectId: "netflix-clone-6af2b",
  storageBucket: "netflix-clone-6af2b.appspot.com",
  messagingSenderId: "854552274926",
  appId: "1:854552274926:web:751ccf843e047c862810ff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db