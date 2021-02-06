import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledForm = styled.form`
	${tw`shadow-lg mb-8 md:m-auto p-2 md:p-4 xl:p-12 2xl:p-24 relative w-full opacity-75 bg-black-soft flex-grow rounded-lg text-white flex-col items-stretch font-mono`}
	transition: background 20ms ease-in-out;
	padding-bottom: ${(props) => props.submitted && '3rem'};
	padding-top: ${(props) => props.submitted && '3rem'};
`;

//Button For Form
export const FormButton = styled.a`
	${tw`rounded-none shadow-sm font-mono no-underline text-base text-tertiary opacity-90 font-semibold bg-black-soft h-16 flex-grow uppercase flex justify-center items-center sm:rounded-l-sm`}
	transition: background-color 0.2s ease-in-out;
	letter-spacing: 0.1rem;
	&:first-child {
		${tw`sm:rounded-r-sm bg-black-link text-tertiary hover:text-black-soft hover:bg-tertiary`}
	}
	&:hover {
		${tw`cursor-pointer text-black-soft bg-tertiary opacity-50`}
	}
`;

export const ButtonWrapper = styled.div`
	${tw`flex-col md:flex-row nowrap w-full h-auto justify-around items-center p-0 mt-4`}
	margin-top: ${(props) => props.submitted && '0px'};
`;

export const Inner = styled.div`
	${tw`w-full xxl:w-2/3 text-center flex flex-col items-start justify-around lg:text-left`};
`;

export const ProjectsWrapper = styled.div`
	${tw`flex-col flex md:flex-row md:inline-flex md:flex-wrap justify-between`};
`;

export const TitleWrapper = styled.div`
	${tw`text-tertiary rounded-sm overflow-hidden relative uppercase text-xl md:text-2xl xl:text-3xl font-mono p-4`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	&:before {
		${tw`absolute  -z-1 inset-0 h-full w-full`}
		content: ' ';
		filter: blur(1px);
	}
`;

export const LinkWrapper = styled(Link)`
	${tw`shadow-lg mx-0 my-1 md:m-2 min-h-sm w-full  md:min-h-wrap md:w-1/2 relative no-underline rounded-lg text-white flex-col overflow-hidden flex-grow flex justify-end`};
	animation-delay: 2s;
	flex-basis: calc(50% - 1rem);
	transition: transform 1.4s;
	transition-delay: ${(props) => (props.delay + 1) * 50}ms;
	filter: grayscale(30%);
	&:before {
		${tw`bg-center bg-no-repeat bg-cover absolute -z-1 h-full w-full inset-0`}
		content: ' ';
		background-image: url(${(props) => props.bg});
		filter: opacity(0.85) grayscale(70%);
	}
	&:hover {
		transform: translateY(-7px);
		&:before {
			filter: grayscale(30%);
		}
	}
`;
