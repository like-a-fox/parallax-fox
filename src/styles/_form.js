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
	${tw`text-lg text-tertiary inline-flex uppercase font-mono z-1000 opacity-75`}
	color: ${(props) => props.error && colors.primary};
	font-weight: ${(props) => (props.error ? 600 : 'initial')};
	transform: translate(8px, 8px);
`;

export const Input = styled.input`
	${tw`opacity-75 w-full shadow-default hover:shadow-hover focus:shadow-focus bg-black-link uppercase mb-4 text-grey text-mono text-base h-16 border-none pl-3 outline-none font-thin`}
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	transition: box-shadow 0.4s ease-in-out;
	letter-spacing: -0.75px;
	box-shadow: ${(props) => props.error && `-4px 0px 0 0 ${colors.pink}`};
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.grey)};
		opacity: 0.5;
	}
`;

//Text Area Alt

export const TextArea = styled.textarea`
	${tw`opacity-75 w-full shadow-default hover:shadow-hover focus:shadow-focus bg-black-link uppercase mb-4 p-3 text-grey text-mono text-base h-48 border-none outline-none font-thin`}
	text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
	transition: box-shadow 0.4s ease-in-out;
	resize: none;
	letter-spacing: -0.75px;
	box-shadow: ${(props) => props.error && `-4px 0px 0 0 ${colors.pink}`};
	&::placeholder {
		color: ${({ error }) => (error ? colors.pink : colors.grey)};
		opacity: 0.5;
	}
`;

//Form

export const Form = styled.form`
	${tw`shadow-lg mb-8 md:m-auto p-0 md:p-4 xl:p-12 2xl:p-24 relative w-full opacity-75 bg-black-soft flex-grow rounded-lg text-white flex-col items-stretch font-mono`}
	transition: background 20ms ease-in-out;
	background-color: ${(props) => props.submitted && 'transparent'};
`;

//Button For Form
export const FormButton = styled.a`
	${tw`rounded-none mb-4 sm:mb-auto shadow-sm font-mono no-underline text-base opacity-75 font-light text-main bg-black-soft h-16 flex-grow uppercase flex justify-center items-center sm:rounded-l-sm`}
	transition: background-color 0.2s ease-in-out;
	&:last-child {
		${tw`sm:rounded-r-sm bg-black-link text-tertiary hover:text-black-soft hover:bg-tertiary`}
	}
	&:hover {
		${tw`cursor-pointer font-normal text-black-soft bg-main opacity-50`}
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
