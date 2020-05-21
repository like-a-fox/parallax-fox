let firebaseConfig = {
	GATSBY_FIREBASE_API_KEY: 'AIzaSyCYC4_YR8nHblokKMWgHYPtjmvg0lisC-g',
	GATSBY_FIREBASE_AUTH_DOMAIN: 'parallax-fox.firebaseapp.com',
	GATSBY_FIREBASE_DATABASE_URL: 'https://parallax-fox.firebaseio.com',
	GATSBY_FIREBASE_PROJECT_ID: 'parallax-fox',
	GATSBY_FIREBASE_STORAGE_BUCKET: 'parallax-fox.appspot.com',
	GATSBY_FIREBASE_MESSAGING_SENDER_ID: '595587400052',
	GATSBY_FIREBASE_APP_ID: '1: 595587400052:web:f2dc5e1810f23c3f35ac21',
	GATSBY_FIREBASE_MEASUREMENT_ID: 'G-GF6W9N8HQN',
};
module.exports.FIREBASE_CONFIG = {
	apiKey: firebaseConfig.GATSBY_FIREBASE_API_KEY,
	authDomain: firebaseConfig.GATSBY_FIREBASE_AUTH_DOMAIN,
	databaseURL: firebaseConfig.GATSBY_FIREBASE_DATABASE_URL,
	projectId: firebaseConfig.GATSBY_FIREBASE_PROJECT_ID,
	storageBucket: firebaseConfig.GATSBY_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: firebaseConfig.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
	appId: firebaseConfig.GATSBY_FIREBASE_APP_ID,
	measurementID: firebaseConfig.GATSBY_FIREBASE_MEASUREMENT_ID,
};
