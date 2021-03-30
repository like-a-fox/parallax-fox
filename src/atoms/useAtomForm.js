import { atom, useAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import {
	INITIAL_FORM,
	handleErrors,
	handleFormSubmission,
	createErrorMessage,
} from './utils';

const formAtom = atomWithReset(INITIAL_FORM);
const updateFormAtom = atom(
	(get) => get(formAtom),
	(get, set, event) =>
		set(formAtom, { ...get(formAtom), [event.target.name]: event.target.value })
);

const errorsAtom = atom([]);
const updateErrorsAtom = atom(
	(get) => get(errorsAtom),
	(get, set, name) => {
		const errors = get(errorsAtom);
		const fieldError = handleErrors(get(formAtom), name);
		const focus = !fieldError && errors.indexOf(name) !== -1;
		return set(
			errorsAtom,
			focus
				? errors.splice(errors.indexOf(name), 1)
				: fieldError
				? [...errors, name]
				: errors
		);
	}
);

const submittedAtom = atom(false);

const submitFormAtom = atom(
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

const clicksAtom = atom(0);

const updateClicksAtom = atom(
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

const useAtomForm = () => {
	const [submitted, handleSubmit] = useAtom(submitFormAtom);
	const [clicks, handleClick] = useAtom(updateClicksAtom);
	const [form, updateForm] = useAtom(updateFormAtom);
	const [errors, updateErrors] = useAtom(updateErrorsAtom);
	const handleReset = useResetAtom(formAtom);

	return {
		...form,
		errors,
		clicks,
		submitted,
		createErrorMessage,
		handleFields: {
			onChange: updateForm,
			onFocus: (event) => {
				const { name } = event.target;
				updateErrors((errors) =>
					errors?.length && errors.indexOf(name) !== -1
						? errors.splice(errors.indexOf(name), 1)
						: errors
				);
			},
			onBlur: (event) => {
				updateForm(event);
				updateErrors(event.target.name);
			},
		},

		handleReset,
		handleSubmit,
		handleClick,
	};
};

export default useAtomForm;
