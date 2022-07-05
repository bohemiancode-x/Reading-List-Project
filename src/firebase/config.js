import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDs8qbvpAq-7eMZYVi_Va8SbXeLumwWHqM",
    authDomain: "reading-list-e06a9.firebaseapp.com",
    projectId: "reading-list-e06a9",
    storageBucket: "reading-list-e06a9.appspot.com",
    messagingSenderId: "219444250816",
    appId: "1:219444250816:web:6af35b2b457cf87f8e0525"
};

  //init firebase
  initializeApp(firebaseConfig)

  //init firestore
  const db = getFirestore()

  //init auth
  const auth = getAuth()

  export { db, auth }