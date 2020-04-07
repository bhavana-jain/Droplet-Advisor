import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlHfnXsmHvuEUypJ4TBXvdYf2w6zkwwlM",
    authDomain: "droplet-wealth.firebaseapp.com",
    databaseURL: "https://droplet-wealth.firebaseio.com",
    projectId: "droplet-wealth",
    storageBucket: "droplet-wealth.appspot.com",
    messagingSenderId: "256725549068",
    appId: "1:256725549068:web:0c5296dcc71ccc6dee2e29",
    measurementId: "G-HQPEBE39M4"
};


firebase.initializeApp(firebaseConfig);

export default firebase;