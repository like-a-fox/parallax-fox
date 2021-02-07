import { default as styled, createGlobalStyle } from 'styled-components';
import { fade } from './Animations';

export const Inner = styled.div`
	${tw`w-full xxl:w-2/3 text-center flex flex-col items-start justify-around lg:text-left`};
`;

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  *:focus {
      outline:none;
  }
  *::-webkit-scrollbar {
  display: none;
	}
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: none;
    background-color:#161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
	  ${tw`flex flex-column items-stretch justify-start`}
    animation: ${fade};
  }

  a {
    color:#bc8999;
    text-decoration: none;
  }
`;
