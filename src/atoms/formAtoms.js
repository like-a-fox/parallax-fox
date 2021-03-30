import { atom } from 'jotai';
import { atomWithReset, RESET } from 'jotai/utils';
import { INITIAL_FORM, handleErrors, handleFormSubmission } from './utils';

const FORM_BOOL_STATES = { name: false, email: false };

export const touchedAtom = atom(FORM_BOOL_STATES);

export const updateTouchedAtom = atom(
	(get) => get(touchedAtom),
	(get, set, name) => {
		const touched = get(touchedAtom);
		return set(touchedAtom, { ...touched, [name]: !touched[name] });
	}
);

export const errorsAtom = atom(FORM_BOOL_STATES);
export const updateErrorsAtom = atom(
	(get) => get(errorsAtom),
	(get, set, name) => {
		const errors = get(errorsAtom);
		const touched = get(touchedAtom)[name];
		const hasError = handleErrors(get(formAtom), name);
		const fieldError = touched && hasError;
		if (errors[name]) {
			if (!hasError || !touched) {
				return set(errorsAtom, { ...errors, [name]: false });
			}
		} else if (fieldError) {
			set(errorsAtom, { ...errors, [name]: true });
		}
	}
);

export const formAtom = atomWithReset(INITIAL_FORM);
export const updateFormAtom = atom(
	(get) => get(formAtom),
	(get, set, event) => {
		if (event === RESET) {
			set(touchedAtom, FORM_BOOL_STATES);
			set(errorsAtom, FORM_BOOL_STATES);
			set(submittedAtom, false);
			set(clicksAtom, 0);
			set(formAtom, INITIAL_FORM);
		} else {
			set(formAtom, {
				...get(formAtom),
				[event.target.name]: event.target.value,
			});
		}
	}
);

export const submittedAtom = atom(false);

export const submitFormAtom = atom(
	(get) => get(submittedAtom),
	(get, set, _arg) => {
		if (!get(errorsAtom)?.length) {
			const handleSubmit = async () => {
				await handleFormSubmission(get(formAtom));
			};
			handleSubmit();
			set(formAtom, INITIAL_FORM);
			set(submittedAtom, true);
		}
	}
);

export const clicksAtom = atom(0);

export const updateClicksAtom = atom(
	(get) => get(clicksAtom),
	(get, set, _arg) => {
		const clicks = get(clicksAtom);
		if (clicks < 2) {
			return set(clicksAtom, clicks + 1);
		} else {
			set(submittedAtom, false);
			return set(clicksAtom, 0);
		}
	}
);
