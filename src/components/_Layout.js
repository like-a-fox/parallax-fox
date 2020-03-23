import 'typeface-cantata-one';
import 'typeface-open-sans';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SEO } from './Layout';
import { createGlobalStyle } from 'styled-components';

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
    background-color:${({ invert }) =>
					invert ? 'rgb(180,180,180)' : '#161719'};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	filter: ${(props) => props.layoutFilter};
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

/**
 * @component Layout
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {oneOfType} props.children
 * @param {boolean} props.invert
 */
const Layout = (props) => {
	const { children, invert } = props;
	return (
		<>
			<SEO />
			<GlobalStyle invert={invert} />
			{children}
		</>
	);
};
Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	invert: PropTypes.bool,
};

Layout.defaultProps = {
	invert: false,
};

export default memo(Layout);
