import * as firebase from "firebase";

export const initialize = () =>{} firebase.initializeApp({
	apiKey: "AIzaSyCBg2neWRQ8XQ37AkNbT-5Qv8iQkdbkYj0",
    authDomain: "chat-for-mobile-native.firebaseapp.com",
    databaseURL: "https://chat-for-mobile-native.firebaseio.com/",
    projectId: "chat-for-mobile-native",
    storageBucket: "chat-for-mobile-native.appspot.com",
    messagingSenderId: "390172339967"
});

export const setListener = (endpoint, updaterFn) => {
	firebase.database().ref(endpoint).on('value', updaterFn);
	return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
	return firebase.database().ref(endpoint).push(data);
}