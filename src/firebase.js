import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAkl4PggtD_ksm5a6mymvNOIBnM_8WXhO8",
    authDomain: "age-of-ampires.firebaseapp.com",
    projectId: "age-of-ampires",
    storageBucket: "age-of-ampires.appspot.com",
    messagingSenderId: "206276458618",
    appId: "1:206276458618:web:b11c3d6c288b9c388523c3",
};

firebase.initializeApp(config);

export const database = firebase.database;
export const auth = firebase.auth();

export default firebase;