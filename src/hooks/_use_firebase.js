import { useEffect, useState } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
};

export default function useFirebase() {
  const [firebase, setFirebase] = useState(null);
  useEffect(() => {
    app.initializeApp(config);
    const auth = app.auth();
    const db = app.database();
    const googleProvider = new app.auth.GoogleAuthProvider();
    const facebookProvider = new app.auth.FacebookAuthProvider();
    const twitterProvider = new app.auth.TwitterAuthProvider();
    const user = uid => db.ref(`users/${uid}`);

    setFirebase({
      doCreateUserWithEmailAndPassword: (email, password) =>
        auth.createUserWithEmailAndPassword(email, password),
      doSignInWithEmailAndPassword: (email, password) =>
        auth.signInWithEmailAndPassword(email, password),
      doSignInWithGoogle: () => auth.signInWithPopup(googleProvider),
      doSignInWithFacebook: () => auth.signInWithPopup(facebookProvider),
      doSignInWithTwitter: () => auth.signInWithPopup(twitterProvider),
      doSignOut: () => auth.signOut(),
      doPasswordReset: email => auth.sendPasswordResetEmail(email),
      doSendEmailVerification: () =>
        auth.currentUser.sendEmailVerification({
          url: process.env.GATSBY_CONFIRMATION_EMAIL_REDIRECT,
        }),
      doPasswordUpdate: password => auth.currentUser.updatePassword(password),
      onAuthUserListener: (next, fallback) =>
        auth.onAuthStateChanged(authUser => {
          if (authUser) {
            user(authUser.uid)
              .once('value')
              .then(snapshot => {
                const dbUser = snapshot.val();
                if (!dbUser.roles) {
                  dbUser.roles = {};
                }
                authUser = {
                  uid: authUser.uid,
                  email: authUser.email,
                  emailVerified: authUser.emailVerified,
                  providerData: authUser.providerData,
                  ...dbUser,
                };
                next(authUser);
              });
          } else {
            fallback();
          }
        }),
      user,
      users: () => db.ref('users'),
      message: uid => db.ref(`messages/${uid}`),
      messages: () => db.ref('messages'),
    });
    return () => {
      setFirebase(null);
    };
  }, [setFirebase]);
  return firebase;
}
