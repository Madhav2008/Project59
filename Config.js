import firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyCMAd_9KuyE81KyFkQmdNvV7YHXkfVZhKE",
    authDomain: "wireless-buzzer-9d3bf.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-9d3bf-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-9d3bf",
    storageBucket: "wireless-buzzer-9d3bf.appspot.com",
    messagingSenderId: "719170920781",
    appId: "1:719170920781:web:06c7e54eaf83426851d704"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();