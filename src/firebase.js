import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(config);

const auth = firebase.auth()
const db = firebase.firestore();

const createUserDocument = async (user, data) => {
  if (!user) return

  const userRef = db.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = user
    try {
      await userRef.set({
        displayName,
        email,
        ...data
      })
    } catch (error) {
      console.log('from create user', error)
    }
  }

  return getUserDocument(user.uid)
}

const getUserDocument = async uid => {
  if (!uid) return

  try {
    const userDocument = await db.doc(`users/${uid}`).get()
    return {
      uid,
      ...userDocument.data()
    }
  } catch (error) {
    console.log('from get user', error)
  }
}

export { auth, db, createUserDocument, getUserDocument }