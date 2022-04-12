import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDt8RHQNFT0JTCcF_AGVNZphnawgBrdqaQ",
  authDomain: "coding-bootcamp-d8bb3.firebaseapp.com",
  projectId: "coding-bootcamp-d8bb3",
  storageBucket: "coding-bootcamp-d8bb3.appspot.com",
  messagingSenderId: "504002166669",
  appId: "1:504002166669:web:54d6a4626f80ac324287c4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth