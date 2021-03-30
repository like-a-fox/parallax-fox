const firebaseConfig = {
	apiKey: 'AIzaSyCYC4_YR8nHblokKMWgHYPtjmvg0lisC-g',
	authDomain: 'parallax-fox.firebaseapp.com',
	databaseURL: 'https://parallax-fox.firebaseio.com',
	projectId: 'parallax-fox',
	storageBucket: 'parallax-fox.appspot.com',
	messagingSenderId: '595587400052',
	appId: '1:595587400052:web:f2dc5e1810f23c3f35ac21',
	measurementId: 'G-GF6W9N8HQN',
};

const baseString = 'GATSBY_FIREBASE_';

const transformKey = (key) =>
	key.replace(/[A-Z]/, (match) => `_${match}`).toUpperCase();

console.log(
	Object.keys(firebaseConfig).reduce(
		(prev, next) => `${prev}
${baseString}${transformKey(next)}=${firebaseConfig[next]}`,
		''
	)
);
