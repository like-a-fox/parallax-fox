import { useInitializeFirebase } from './_useInitFire';

function useFirebase() {
	const { initalizing, firebase } = useInitializeFirebase();
	if (!initalizing) {
		return [firebase];
	}
}

export default useFirebase;
