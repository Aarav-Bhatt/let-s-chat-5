var firebaseConfig = {
    apiKey: "AIzaSyDgjikGgv423uqzYHcoxTrng-fwN3fqiwg",
    authDomain: "let-schat-ddea6.firebaseapp.com",
    databaseURL:"https://let-schat-ddea6-default-rtdb.firebaseio.com",
    projectId: "let-schat-ddea6",
    storageBucket:"let-schat-ddea6.appspot.com",
    messagingSenderId: "824997109927",
    appId: "1:824997109927:web:0b6d656e22b1e66083fb82"
  };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("wlcm").innerHTML="welcome"+user_name;