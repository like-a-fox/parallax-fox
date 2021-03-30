import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { INITIAL_FORM, handleErrors, handleFormSubmission } from './utils';

export const formAtom = atomWithReset(INITIAL_FORM);
export const updateFormAtom = atom(
	(get) => get(formAtom),
	(get, set, event) =>
		set(formAtom, { ...get(formAtom), [event.target.name]: event.target.value })
);

export const touchedAtom = atom([]);

export const updateTouchedAtom = atom(
	(get) => get(touchedAtom),
	(get, set, name) => {
		const touched = get(touchedAtom);
		return set(
			touchedAtom,
			touched.indexOf(name) === -1
				? [...touched, name]
				: touched.splice(touched.indexOf(name), 1)
		);
	}
);

export const errorsAtom = atom([]);
export const updateErrorsAtom = atom(
	(get) => get(errorsAtom),
	(get, set, name) => {
		const errors = get(errorsAtom);
		const touched = get(touchedAtom).indexOf(name) !== -1;
		const fieldError = touched && handleErrors(get(formAtom), name);
		return set(
			errorsAtom,
			errors.indexOf(name) === -1
				? fieldError
					? [...errors, name]
					: errors
				: errors.splice(errors.indexOf(name), 1)
		);
	}
);

export const submittedAtom = atom(false);

export const submitFormAtom = atom(
	(get) => get(submittedAtom),
	(get, set, _arg) => {
		if (!get(errorsAtom)?.length) {
			handleFormSubmission(get(formAtom)).then(() => {
				set(formAtom, INITIAL_FORM);
				return set(submittedAtom, true);
			});
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
