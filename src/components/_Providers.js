import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { createGlobalStyle, keyframes, css } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import 'typeface-cantata-one';

const fadeOpacity = keyframes`
  0% { 
        opacity: 0; 
    } 
  100% { 
        opacity: 1; 
     } 
`;
const fadeAnimation = css`
	${fadeOpacity} 3s ease-in-out;
`;

const GlobalStyle = createGlobalStyle`
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
    animation: ${fadeAnimation}; 
    animation-iteration-count: 1; 
    animation-fill-mode: both; 
  }

  a {
    color:#bc8999;
    text-decoration: none;
  }
`;

function Providers({ children }) {
	return (
		<SnackbarProvider
			autoHideDuration={1250}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			maxSnack={3}>
			<GlobalStyle />
			{children}
		</SnackbarProvider>
	);
}

Providers.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.func,
	]),
};

export default memo(Providers);
