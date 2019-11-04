import styled from 'styled-components';
import { colors } from '../../tailwind';

//Input Styles

export const InputWrapper = styled.div`
	${tw`relative no-underline rounded-lg text-white flex-col flex justify-end font-mono`};
	transition: color 0.4s ease-in-out;
	&:hover label {
		color: ${colors.white};
		font-weight: 600;
	}
	&:focus-within label {
		color: ${colors.perpSkiz};
		font-weight: 400;
	}
`;

export const InputLabel = styled.label`
	font-size: ${({ fontSize }) => fontSize || '1.2rem'};
	color: ${({ color, error }) => (error ? colors.pink : color || colors.white)};
	display: inline-flex;
	text-transform: uppercase;
	font-weight: ${({ error }) => (error ? 600 : 'initial')};
	opacity: 0.7;
	transform: translate(8px, 8px);
	font-family: inherit;
	z-index: 1000;
`;

export const Input = styled.input`
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	opacity: 0.7;
	transition: box-shadow 0.4s ease-in-out;
	background-color: #23262b;
	height: ${({ height }) => height || 52}px;
	border: none;
	outline: none;
	width: ${({ width }) => width}%;
	padding: 8px;
	padding-left: ${({ padding }) => padding || 12}px;
	padding-top: 12px;
	font-size: 1rem;
	font-family: inherit;
	text-transform: uppercase;
	letter-spacing: -0.75px;
	margin-bottom: 24px;
	font-weight: 200;
	color: ${colors.grey};
	box-shadow: ${({ error }) =>
		error ? `-4px 0px 0 0 ${colors.pink}` : `0px 2px 0 0 ${colors.white}`};
	&:hover {
		box-shadow: 0px 4px 0 0 ${colors.white};
	}
	&:focus {
		box-shadow: 0 4px 0 0 ${colors.perpSkiz};
	}
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.grey)};
		opacity: 0.5;
	}
`;

//Text Area Alt

export const TextArea = styled.textarea`
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	opacity: 0.7;
	transition: box-shadow 0.4s ease-in-out;
	background-color: #23262b;
	height: ${({ height }) => height || 120}px;
	border: none;
	resize: none;
	outline: none;
	width: ${({ width }) => width}%;
	padding: 8px;
	padding-left: ${({ padding }) => padding || 12}px;
	padding-top: 12px;
	font-size: 1rem;
	font-family: inherit;
	text-transform: uppercase;
	letter-spacing: -0.75px;
	margin-bottom: 24px;
	font-weight: 200;
	color: ${colors.grey};
	box-shadow: ${({ error }) =>
		error ? `-4px 0px 0 0 ${colors.pink}` : `0px 2px 0 0 ${colors.white}`};
	&:hover {
		box-shadow: 0px 4px 0 0 ${colors.white};
	}
	&:focus {
		box-shadow: 0 4px 0 0 ${colors.perpSkiz};
	}
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.grey)};
		opacity: 0.5;
	}
`;

//Form

export const Form = styled.form`
	${tw`shadow-lg p-4 xl: p-12 2xl:p-24 relative rounded-lg text-white flex-col flex stretch font-mono`}
	width: 100%;
	flex-grow: 1;
	transition: background 20ms ease-in-out;
	background-color: ${(props) => (props.submitted ? 'transparent' : '#161719')};
	opacity: 0.8;
	@media (max-width: 700px) {
		padding: 0;
		margin-bottom: 150px;
	}
`;

//Button For Form
export const FormButton = styled.a`
	${tw`shadow-sm font-mono`}
	transition: background-color 0.2s ease-in-out;
	text-decoration: none;
	font-size: 1rem;
	opacity: 0.7;
	font-weight: 300;
	color: ${colors.white};
	background-color: #23262b;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 48px;
	max-height: 48px;
	min-width: 33%;
	flex-grow: 1;
	text-transform: uppercase;
	&:first-child {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
		box-shadow: none;
		flex-basis: 66%;
	}
	&:last-child {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		background-color: ${colors.white};
		color: #23262b;
	}
	&:hover {
		cursor: pointer;
		font-weight: 600;
		color: #23262b;
		background-color: ${colors.white};
		opacity: 0.5;
		&:last-child {
			color: ${colors.white};
			background-color: #23262b;
		}
	}
	@media screen and (max-width: 600px) {
		min-width: 100%;
		&:first-child,
		&:last-child {
			border-top-left-radius: 0px;
			border-bottom-left-radius: 0px;
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
			margin-bottom: 18px;
		}
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	height: auto;
	padding: 0;
	margin-top: 24px;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		flex-direction: column;
		a {
			min-width: 100%;
			&:first-child,
			&:last-child {
				border-top-left-radius: none;
				border-bottom-left-radius: none;
				border-top-right-radius: none;
				border-bottom-right-radius: none;
				margin-bottom: 18px;
			}
		}
	}
`;
