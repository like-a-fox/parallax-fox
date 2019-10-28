/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('dotenv').config();
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = process.env.FIREBASE_GMAIL_EMAIL;
const gmailPassword = process.env.FIREBASE_GMAIL_PASSWORD;
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database
	.ref('/messages/{pushKey}')
	.onCreate(async (event) => {
		const { name, html } = await event.val();
		const mailOptions = {
			to: 'likeafox.dev@gmail.com',
			subject: `Information Request from ${name}`,
			html: html,
		};
		await mailTransport.sendMail(mailOptions);
	});