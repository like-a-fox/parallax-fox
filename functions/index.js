'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
// The Firebase Admin SDK to access the Firebase Realtime Database.
admin.initializeApp(functions.config().firebase);
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
  `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`
);
exports.sendContactMessage = functions.database
  .ref('/messages/{pushKey}')
  .onCreate(event => {
    const val = event.val();
    const mailOptions = {
      to: 'likeafox.dev@gmail.com',
      subject: `Information Request from ${val.name}`,
      html: val.html,
    };
    return mailTransport.sendMail(mailOptions).then();
  });
