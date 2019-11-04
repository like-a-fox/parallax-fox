import { createContext, useContext, useState, useEffect } from 'react';
import * as nowFallback from '../../now.json';
import firebase from 'firebase/app';
import 'firebase/database';

let now = process && process.env;

if (!now)
{
	now = nowFallback.env;
}

const config = {
	apiKey: now.GATSBY_FIREBASE_API_KEY,
	authDomain: now.GATSBY_FIREBASE_AUTH_DOMAIN,
	databaseURL: now.GATSBY_FIREBASE_DATABASE_URL,
	projectId: now.GATSBY_FIREBASE_PROJECT_ID,
	storageBucket: now.GATSBY_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: now.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
	appId: now.GATSBY_FIREBASE_APP_ID,
	measurementID: now.GATSBY_FIREBASE_MEASUREMENT_ID,
};

export const FirebaseContext = createContext({
	firebase: null,
});

export const useInitFire = () =>
{
	const { firebase } = useContext(FirebaseContext);
	return firebase;
};

export const useInitializeFirebase = () =>
{
	const [state, setState] = useState(() =>
	{
		if (!firebase.apps.length)
		{
			firebase.initializeApp(config);
			firebase.database();
		}
		return { initializing: !firebase, firebase };
	});
	function onChange(firebase)
	{
		setState({ initializing: false, firebase });
	}

	useEffect(() =>
	{
		const unsubscribe = () => onChange(firebase);
		return () => unsubscribe();
	}, []);

	return state;
};
