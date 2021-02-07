import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../tailwind';

const StyledButton = styled.a`
	${tw`rounded-none shadow-sm font-mono no-underline text-base text-tertiary opacity-90 font-semibold bg-black-soft h-16 flex-grow uppercase flex justify-center items-center sm:rounded-l-sm`}
	transition: background-color 0.2s ease-in-out;
	letter-spacing: 0.1rem;
	${({ secondary }) =>
		secondary &&
		`color: ${colors.tertiary};
  background-color: ${colors['black-link']};`}
	&:hover {
		${tw`cursor-pointer text-black-soft bg-tertiary opacity-75`}
		${({ secondary }) =>
			secondary &&
			`background-color: ${colors.tertiary};
  color: ${colors['black-link']};`}
	}
`;

export const ButtonWrapper = styled.div`
	${tw`flex-col md:flex-row nowrap w-full h-auto justify-around items-center p-0 mt-4`}
	margin-top: ${(props) => props.submitted && '0px'};
`;

const Button = (props) => {
	const { label, ...extraProps } = props;
	return <StyledButton {...extraProps}>{label}</StyledButton>;
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Button;
