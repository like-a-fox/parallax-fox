import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useInitializeFirebase, FirebaseContext } from './_useInitFire';

function FirebaseProvider({ children }) {
	const { initalizing, firebase } = useInitializeFirebase();
	if (initalizing) {
		return <div> ...Loading</div>;
	}
	return (
		<FirebaseContext.Provider firebase={firebase}>
			{children}
		</FirebaseContext.Provider>
	);
}

FirebaseProvider.propTypes = {
	children: PropTypes.any,
};

export default memo(FirebaseProvider);
