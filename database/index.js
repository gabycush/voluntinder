import * as firebase from "firebase";

// // Initialize Firebase
// // TODO: Replace with your project's customized code snippet
// var config = {
//   apiKey: "AIzaSyDYb3alA1l-dsfZ-FFri8d5Ac3oFFfKfVE",
//   authDomain: "voluntinder-8c7f9.firebaseapp.com",
//   databaseURL: "https://voluntinder.firebaseio.com",
//   storageBucket: "voluntinder-8c7f9.appspot.com",
// };
// firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}