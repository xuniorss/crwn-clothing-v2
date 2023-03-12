import { initializeApp } from 'firebase/app'
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
   apiKey: 'AIzaSyCv2xY5jS92QH3f1UJ1oode2oR28NRjE24',
   authDomain: 'crown-clothing-db-51239.firebaseapp.com',
   projectId: 'crown-clothing-db-51239',
   storageBucket: 'crown-clothing-db-51239.appspot.com',
   messagingSenderId: '278985977286',
   appId: '1:278985977286:web:1553d43d35a2cebd6056c7',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
   if (!userAuth) return

   const userDocRef = doc(db, 'users', userAuth.uid)

   const userSnapshot = await getDoc(userDocRef)

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
         await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation })
      } catch (error) {
         console.log('error creating the user', error.message)
      }
   }

   return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return

   return await createUserWithEmailAndPassword(auth, email, password)
}
