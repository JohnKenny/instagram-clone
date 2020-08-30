import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4xzBpMdoh6R_d3p8Mu0JLPdWrw_d7pkI",
    authDomain: "instagram-clone-react-51eda.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-51eda.firebaseio.com",
    projectId: "instagram-clone-react-51eda",
    storageBucket: "instagram-clone-react-51eda.appspot.com",
    messagingSenderId: "350774034855",
    appId: "1:350774034855:web:22f6f5d37756d37ecc7682"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebase };