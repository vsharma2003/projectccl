import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhfV-xHwqP79kdyU6ujFvsnhRhzE82BXY",
  authDomain: "cloudcomp-93258.firebaseapp.com",
  projectId: "cloudcomp-93258",
  storageBucket: "cloudcomp-93258.appspot.com",
  messagingSenderId: "942688868551",
  appId: "1:942688868551:web:7af4a0260fa565f87746e2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
