import { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: process.env.GATSBY_FIREBASE_API_KEY,
	authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
	projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
	storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.GATSBY_FIREBASE_APP_ID,
	measurementID: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
};

export const FirebaseContext = createContext({
	firebase: null,
});

export const useInitFire = () => {
	const { firebase } = useContext(FirebaseContext);
	return firebase;
};

export const useInitializeFirebase = () => {
	const [state, setState] = useState(() => {
		if (!firebase.apps.length) {
			firebase.initializeApp(config);
			firebase.database();
		}
		return { initializing: !firebase, firebase };
	});
	function onChange(firebase) {
		setState({ initializing: false, firebase });
	}

	useEffect(() => {
		const unsubscribe = () => onChange(firebase);
		return () => unsubscribe();
	}, []);

	return state;
};

export const messageFire = (firebase) => {
	return (form) => {
		const db = firebase.database();
		const messageRef = db.ref('/messages').push();
		if (form.name && form.message && form.email) {
			try {
				messageRef.set({ ...form });
			} catch (err) {
				throw new Error(err.message);
			}
		}
	};
};
