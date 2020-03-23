import {useState,useEffect} from 'react';
import {default as useFirebase} from './_useFirebase';

export const email_regex_str='\\S+@\\S+\\.\\S+';
export const empty_regex_str='[A-Za-z0-9]{1,20}';
export const email_regex=new RegExp(email_regex_str);
export const empty_regex=new RegExp(empty_regex_str);

export const handleForm=({name,email,message}) => ({
	name,
	email,
	message,
	date: Date.now(),
	html: `
						  <div>From: ${name}</div>
						  <div>Email: <a href="mailto:${email}">${email}</a></div>
						  <div>Date: ${Date.now()}</div>
						  <div>Message: ${message}</div>
						  `,
});
export const checkInputs=(inputs) => {
	let emailError=false;
	if(inputs.email&&inputs.email.length>0) {
		emailError=!email_regex.test(inputs.email);
	}
	return Object.keys(inputs).reduce(
		(errorList,nextInput) => ({
			...errorList,
			[nextInput]:
				nextInput==='email'
					? emailError
					:inputs[nextInput]===''||
					inputs[nextInput]===null||
					inputs[nextInput]===undefined,
		}),
		{}
	);
};
export const initalForm={
	name: '',
	email: '',
	message: '',
};
function useSendFire() {
	const [inputs,changeInputs]=useState(() => ({...initalForm}));
	const [errors,checkErrors]=useState(
		Object.keys(inputs).reduce((prev,next) => ({...prev,[next]: false}),{})
	);
	const firebase=useFirebase();
	const [formSubmit,changeForm]=useState(() => {
		if(!inputs.message||!inputs.email||!inputs.name) {
			return {error: true,form: null,submitted: false};
		}
		const form=handleForm(inputs);
		return {error: false,form,submitted: false};
	});
	useEffect(() => {
		const {form,error,submitted}=formSubmit;
		if(form&&!error&&!submitted) {
			firebase
				.database()
				.ref('/messages')
				.push(form);
			changeForm({error: false,form: null,submitted: true});
		}
	},[formSubmit,firebase]);
	const handleReset=() => {
		changeInputs({...initalForm});
		const removeErrors=Object.keys(errors).reduce(
			(prev,next) => ({
				...prev,
				[next]: false,
			}),
			{}
		);
		checkErrors(removeErrors);
	};
	const eventFunctions={
		handleReset,
		handleBlur: (event) => {
			const {name,value}=event.target;
			const errorUpdate={
				...errors,
				[name]:
					name==='email'
						? !email_regex.test(value)
						:value===''||value===null||value===undefined,
			};
			checkErrors(errorUpdate);
		},
		handleChange: (event) => {
			const {name,value}=event.target;
			changeInputs({...inputs,[name]: value});
		},
		handleFocus: (event) =>
			checkErrors({...errors,[event.target.name]: false}),

		handleResetSubmit: () => {
			changeForm({...formSubmit,submitted: false});
		},
		handleSubmit: () => {
			checkErrors(checkInputs(inputs));
			if(
				!inputs.message||
				!inputs.email||
				!inputs.name||
				errors.message||
				errors.email||
				errors.name
			) {
				changeForm({error: true,form: null,submitted: false});
			} else {
				const form=handleForm(inputs);
				changeForm({error: false,form,submitted: false});
				handleReset();
			}
		},
	};
	const {submitted}=formSubmit;
	return [inputs,errors,submitted,eventFunctions];
}

export default useSendFire;

