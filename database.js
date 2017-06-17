
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCxQcyAtLljNQGW-oxJPs-rdGEX_844on4",
    authDomain: "voluntinder-7d086.firebaseapp.com",
    databaseURL: "https://voluntinder-7d086.firebaseio.com",
    projectId: "voluntinder-7d086",
    storageBucket: "voluntinder-7d086.appspot.com",
    messagingSenderId: "410571217612"
};
firebase.initializeApp(config);

var bigOne = document.querySelector('#bigOne')
var dbRef = firebase.database().ref().child("text")
// dbRef.on('value', snap => bigOne.innerText = snap.val())

var database = firebase.database();

/**
 * This is a function to write data to the appropriate firebase database
 * 
 * 
 * @param {*} userId 
 * @param {*} name 
 * @param {*} email 
 * @param {*} imageUrl 
 */
function writeUserData(userId, name, email, imageUrl) {
    database.ref().child('users').set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

/**
 * Function to submit form based on give info from the user
 */
function submitForm(){

    writeUserData('thriftcm', 'carson', 'test@aol.com', './site-assets/creepyMario.jpg')

}

