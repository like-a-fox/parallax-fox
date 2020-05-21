import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import 'typeface-cantata-one';

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
	  ${tw`flex flex-column items-center justify-start`}
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
