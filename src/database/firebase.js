// import firebase from "firebase";
import firebase from "firebase";
import uuid from "uuid/v4";
import dotenv from "dotenv";
dotenv.config();
const config = {
  apiKey: "AIzaSyAaZEHRpNv8Ph483YBZb1-rbthYKQ5QU6A",
  authDomain: "increaselimit.firebaseapp.com",
  databaseURL: "https://increaselimit.firebaseio.com",
  projectId: "increaselimit",
  storageBucket: "increaselimit.appspot.com",
  messagingSenderId: "615706483903",
  appId: "1:615706483903:web:40bb7bf973f5b8245eba0a",
};
firebase.initializeApp(config);

const database = firebase.database();

export const addBoardStateFirebase = (boardState) => {
  const id = uuid();
  database.ref(id).set({
    boardState,
    id,
  });
};

export const removeTaskFromFirebase = (id) => {
  database.ref(`/${id}`).remove();
};

export default database;
