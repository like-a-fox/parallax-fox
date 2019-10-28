import { default as getFirebase } from './_get_firebase';
import { useState, useEffect } from 'react';

export const useFirebase = () => {
	const [firebase, setFirebase] = useState(null);
	useEffect(() => {
		const handleFirebase = () => {
			if (!firebase) {
				let fire = getFirebase();
				setFirebase(fire);
			}
		};
		handleFirebase();
	}, [firebase]);
	return [firebase];
};
