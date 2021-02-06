import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../tailwind';

const InputWrapper = styled.div`
	${tw`relative no-underline rounded-lg text-white flex-col flex justify-end font-mono`};
	transition: color 0.4s ease-in-out;
	&:hover label {
		color: ${colors.secondary};
	}
	&:focus-within label {
		color: ${colors.secondary};
	}
`;

const InputLabel = styled.label`
	${tw`text-base font-semibold my-4 text-tertiary inline-flex uppercase font-mono z-1000`}
	color: ${(props) => props.error && colors.pink};
	letter-spacing: 0.25rem;
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
	${tw`opacity-75 w-full shadow-default hover:shadow-hover focus:shadow-focus bg-black-link uppercase mb-4 text-grey font-mono text-sm h-16 border-none pl-3 outline-none font-thin`}
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	transition: box-shadow 0.1s ease-in-out;
	letter-spacing: 0.1rem;
	box-shadow: ${(props) => props.error && `-4px 0px 0 -1px ${colors.pink}`};
	&:hover {
		box-shadow: inset 0 0 0 2px rgba(233, 228, 255, 0.5);
		transition: box-shadow 0.5s ease;
	}
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.grey)};
		opacity: 0.5;
	}
`;

const Input = React.forwardRef(function Input(props, inputRef) {
	const { label, name, required, error, ...inputProps } = props;
	return (
		<InputWrapper>
			<InputLabel htmlFor={name} required={required} error={error}>
				{label}
			</InputLabel>
			<InnerInput
				id={name}
				name={name}
				error={error}
				ref={inputRef}
				{...inputProps}
			/>
		</InputWrapper>
	);
});

Input.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.bool,
};

export default Input;
