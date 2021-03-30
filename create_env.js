const firebaseConfig = {
	/* FIREBASE CONFIG HERE */
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
