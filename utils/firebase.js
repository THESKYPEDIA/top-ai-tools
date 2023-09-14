import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhIW5j_B-oq3BobV6-17ijzJSmy_oNSto",
  authDomain: "top-ai-tools.firebaseapp.com",
  projectId: "top-ai-tools",
  storageBucket: "top-ai-tools.appspot.com",
  messagingSenderId: "633704019678",
  appId: "1:633704019678:web:bd9290a8e19dc49ff1344f",
  measurementId: "G-9H5WPFSMY0",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export default app;
