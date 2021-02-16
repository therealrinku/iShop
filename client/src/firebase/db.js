import firebase from "firebase/app";
import "firebase/firestore";
import config from "./config";

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
