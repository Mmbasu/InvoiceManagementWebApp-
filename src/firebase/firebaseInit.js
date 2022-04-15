import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKCus7LD3kQMxt2-4_PnuIcQgeW6KISFA",
    authDomain: "invoice-app-acs-355.firebaseapp.com",
    projectId: "invoice-app-acs-355",
    storageBucket: "invoice-app-acs-355.appspot.com",
    messagingSenderId: "336298787975",
    appId: "1:336298787975:web:503fb30b4bbf015c8aa422",
    measurementId: "G-JSZ8130ZQ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
