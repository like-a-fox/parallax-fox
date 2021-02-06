import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../tailwind';

const TextareaWrapper = styled.div`
	${tw`relative no-underline rounded-lg text-white flex-col flex justify-end font-mono`};
	transition: color 0.4s ease-in-out;
	&:hover label {
		color: ${colors.secondary};
	}
	&:focus-within label {
		color: ${colors.secondary};
	}
`;

const TextareaLabel = styled.label`
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

const InnerTextarea = styled.textarea`
	${tw`opacity-75 w-full shadow-default hover:shadow-hover focus:shadow-focus bg-black-link uppercase mb-4 p-3 text-grey font-mono h-48 border-none outline-none text-base font-thin`}
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	transition: box-shadow 0.4s ease-in-out;
	resize: none;
	letter-spacing: -0.75px;
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

const Textarea = React.forwardRef(function Textarea(props, inputRef) {
	const { label, required, error, name, ...textAreaProps } = props;
	return (
		<TextareaWrapper>
			<TextareaLabel htmlFor={name} required={required} error={error}>
				{label}
			</TextareaLabel>
			<InnerTextarea
				id={name}
				name={name}
				error={error}
				ref={inputRef}
				{...textAreaProps}
			/>
		</TextareaWrapper>
	);
});

Textarea.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.bool,
	name: PropTypes.string,
};

export default Textarea;
