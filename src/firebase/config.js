import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe9DQx-kL6DLhQxagtr39shwV6wVht8wM",
  authDomain: "galu-react.firebaseapp.com",
  projectId: "galu-react",
  storageBucket: "galu-react.appspot.com",
  messagingSenderId: "371235406398",
  appId: "1:371235406398:web:9bf2e043099e5fae34476f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);