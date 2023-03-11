import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCv2xY5jS92QH3f1UJ1oode2oR28NRjE24',
   authDomain: 'crown-clothing-db-51239.firebaseapp.com',
   projectId: 'crown-clothing-db-51239',
   storageBucket: 'crown-clothing-db-51239.appspot.com',
   messagingSenderId: '278985977286',
   appId: '1:278985977286:web:1553d43d35a2cebd6056c7',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
