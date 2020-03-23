import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { default as FirebaseApp } from 'firebase/app';
import 'firebase/database';

export default () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					firebaseConfig {
						apiKey
						authDomain
						appId
						databaseURL
						messagingSenderId
						measurementID
						projectId
						storageBucket
					}
				}
			}
		}
	`);
	const config = data.site.siteMetadata.firebaseConfig;
	return useMemo(() => {
		if (FirebaseApp.apps.length) {
			return FirebaseApp;
		}
		FirebaseApp.initializeApp(config);
		FirebaseApp.database();
		return FirebaseApp;
	}, [config]);
};

