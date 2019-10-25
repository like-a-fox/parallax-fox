const firebase = require('firebase/app');
require('firebase/database');

module.exports = () => {
    const {
        GATSBY_FIREBASE_API_KEY,
        GATSBY_FIREBASE_AUTH_DOMAIN,
        GATSBY_FIREBASE_DATABASE_URL,
        GATSBY_FIREBASE_PROJECT_ID,
        GATSBY_FIREBASE_STORAGE_BUCKET,
        GATSBY_FIREBASE_MESSAGING_SENDER_ID,
        GATSBY_FIREBASE_APP_ID,
      } = process.env;

      firebase.initializeApp(
        {
          apiKey: GATSBY_FIREBASE_API_KEY,
          authDomain: GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: GATSBY_FIREBASE_DATABASE_URL,
          projectId: GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: GATSBY_FIREBASE_APP_ID,
        },
        'parallax-fox'
      );
      return {
          ...firebase,
          database: firebase.database
      }
};
