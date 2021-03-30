import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import {
	submitFormAtom,
	updateClicksAtom,
	updateFormAtom,
	updateErrorsAtom,
	updateTouchedAtom,
	formAtom,
} from './formAtoms';
import { createErrorMessage } from './utils';

const useAtomForm = () => {
	const [submitted, handleSubmit] = useAtom(submitFormAtom);
	const [clicks, handleClick] = useAtom(updateClicksAtom);
	const [form, updateForm] = useAtom(updateFormAtom);
	const [errors, updateErrors] = useAtom(updateErrorsAtom);
	const [touched, updateTouched] = useAtom(updateTouchedAtom);
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
				if (touched.indexOf(name) !== -1) {
					updateTouched(name);
				}
				updateErrors(name);
			},
			onBlur: (event) => {
				updateForm(event);
				const { name } = event.target;
				if (touched.indexOf(name) === -1) {
					updateTouched(name);
				}
				updateErrors(name);
			},
		},
		handleReset,
		handleSubmit,
		handleClick,
	};
};

export default useAtomForm;
