// Import the functions you need from the SDKs you need
import { initializeApp }  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { v4 } from 'uuid'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZW8KcpvHMcgUfgj_jnYg4sYlnieL9t9Y",
  authDomain: "link-3db10.firebaseapp.com",
  projectId: "link-3db10",
  storageBucket: "link-3db10.appspot.com",
  messagingSenderId: "517226952506",
  appId: "1:517226952506:web:70f9deb587b36e443c4203"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Acciones de firebase
export const db = getFirestore(app)
export const storage = getStorage(app)

export async function uploadFile(file){
 const storageRef = ref(storage, v4())
 await uploadBytes(storageRef, file)
 const url = await getDownloadURL(storageRef)
 return url
}

