import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCxBaWYL0fR0RDIuW_79S40KmZI6EaolZs",
  authDomain: "project-3955194369062671350.firebaseapp.com",
  databaseURL: "https://project-3955194369062671350.firebaseio.com",
  projectId: "project-3955194369062671350",
  storageBucket: "project-3955194369062671350.appspot.com",
  messagingSenderId: "571762431178",
  appId: "1:571762431178:web:a67ac4eb29b1017cda1033"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
