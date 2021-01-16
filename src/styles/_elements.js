import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../tailwind';

//Input Styles
const inputHoverShadow = `
	box-shadow: inset 0 0 0 2px rgba(147,128,214,0.3);
	border-radius: 4px;
	transition: box-shadow 0.5s ease;
`;

const InputWrapper = styled.div`
	${tw`relative no-underline rounded-lg text-white flex-col flex justify-end font-mono`};
	transition: color 0.4s ease-in-out;
	&:hover label {
		color: ${colors.white};
	}
	&:focus-within label {
		color: ${colors.perpSkiz};
	}
`;

const InputLabel = styled.label`
	${tw`text-base text-tertiary inline-flex uppercase font-mono z-1000 opacity-75`}
	color: ${(props) => props.error && colors.pink};
	font-weight: ${(props) => props.error && 600};
	transform: translate(8px, 8px);
	${(props) =>
		props.required
			? `
	&:after {
		content: '*';
		position: relative;
		left: 0;
		padding-left: .2rem;
	}
	`
			: ''}
`;

const InnerInput = styled.input`
	${tw`opacity-75 w-full shadow-default hover:shadow-hover focus:shadow-focus bg-black-link uppercase mb-4 text-grey font-mono text-base h-16 border-none pl-3 outline-none font-thin`}
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	transition: box-shadow 0.1s ease-in-out;
	letter-spacing: -0.75px;
	box-shadow: ${(props) => props.error && `-4px 0px 0 -1px ${colors.pink}`};
	&:hover {
		${inputHoverShadow}
	}
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.grey)};
		opacity: 0.5;
	}
`;

export const Input = React.forwardRef(function Input(props, inputRef) {
	const { label, required, error, ...inputProps } = props;
	return (
		<InputWrapper>
			<InputLabel required={required} error={error}>
				{label}
			</InputLabel>
			<InnerInput error={error} ref={inputRef} {...inputProps} />
		</InputWrapper>
	);
});

Input.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.bool,
};

//Text Area Alt

const InnerTextArea = styled.textarea`
	${tw`opacity-75 w-full shadow-default hover:shadow-hover focus:shadow-focus bg-black-link uppercase mb-4 p-3 text-grey font-mono h-48 border-none outline-none text-base font-thin`}
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	transition: box-shadow 0.4s ease-in-out;
	resize: none;
	letter-spacing: -0.75px;
	box-shadow: ${(props) => props.error && `-4px 0px 0 -1px ${colors.pink}`};
	&:hover {
		${inputHoverShadow}
	}
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.grey)};
		opacity: 0.5;
	}
`;

export const TextArea = React.forwardRef(function TextArea(props, inputRef) {
	const { label, required, error, ...textAreaProps } = props;
	return (
		<InputWrapper>
			<InputLabel required={required} error={error}>
				{label}
			</InputLabel>
			<InnerTextArea error={error} ref={inputRef} {...textAreaProps} />
		</InputWrapper>
	);
});

TextArea.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.bool,
};

//Form

export const StyledForm = styled.form`
	${tw`shadow-lg mb-8 md:m-auto p-2 md:p-4 xl:p-12 2xl:p-24 relative w-full opacity-75 bg-black-soft flex-grow rounded-lg text-white flex-col items-stretch font-mono`}
	transition: background 20ms ease-in-out;
	padding-bottom: ${(props) => props.submitted && '3rem'};
	padding-top: ${(props) => props.submitted && '3rem'};
`;

//Button For Form
export const FormButton = styled.a`
	${tw`rounded-none shadow-sm font-mono no-underline text-base opacity-75 font-light text-main bg-black-soft h-16 flex-grow uppercase flex justify-center items-center sm:rounded-l-sm`}
	transition: background-color 0.2s ease-in-out;
	&:first-child {
		${tw`sm:rounded-r-sm bg-black-link text-tertiary hover:text-black-soft hover:bg-tertiary`}
	}
	&:hover {
		${tw`cursor-pointer font-normal text-black-soft bg-main opacity-50`}
	}
`;

export const ButtonWrapper = styled.div`
	${tw`flex-col md:flex-row nowrap w-full h-auto justify-around items-center p-0 mt-4`}
	margin-top: ${(props) => props.submitted && '0px'};
`;

export const Inner = styled.div`
	${tw`w-full xxl:w-2/3 text-center flex flex-col items-start justify-around lg:text-left`};
`;