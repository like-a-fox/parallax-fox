const initialize = {
	options: {
		apiKey: process.env.GATSBY_FIREBASE_API_KEY,
		authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
		projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
		storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.GATSBY_FIREBASE_APP_ID,
		measurementID: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
	},
};
console.log(initialize);

export const formatForm = (form) => {
	const { name, email, message } = form;
	const data = {
		name,
		email,
		message,
		date: Date.now(),
		html: `
						  <div>From: ${name}</div>
						  <div>Email: <a href="mailto:${email}">${email}</a></div>
						  <div>Date: ${Date.now()}</div>
						  <div>Message: ${message}</div>
						  `,
	};
	return data;
}
