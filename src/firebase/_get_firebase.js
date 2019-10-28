import firebase from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: 'AIzaSyCYC4_YR8nHblokKMWgHYPtjmvg0lisC-g',
	authDomain: 'parallax-fox.firebaseapp.com',
	databaseURL: 'https://parallax-fox.firebaseio.com',
	projectId: 'parallax-fox',
	storageBucket: 'parallax-fox.appspot.com',
	messagingSenderId: '595587400052',
	appId: '1: 595587400052:web:f2dc5e1810f23c3f35ac21',
	measurementID: 'G-GF6W9N8HQN',
};

let FirebaseContext = null;

export default () => {
	if (!FirebaseContext) {
		firebase.initializeApp(config);
		firebase.database();
	}
	FirebaseContext = firebase;
	return firebase;
};
