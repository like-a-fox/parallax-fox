const resolveConfig = require('tailwindcss/resolveConfig');
const colors = {
	transparent: 'transparent',
	'blue-black': '#161719',
	'blue-grey': '#23262b',
	greyDigo: '#6d80af',
	burgDee: '#bc8999',
	perpSkiz: '#9289bc',
	tealDerp: '#d1dbf9',
	primary: '#f2d2e9',
	secondary: '#9289bc',
	tertiary: '#d1dbf9',
	main: '#d1dbf9',
	black: '#222b2f',
	'grey-darkest': '#273238',
	'grey-darker': '#364349',
	'grey-dark': '#70818a',
	grey: '#9babb4',
	'grey-light': '#dae4e9',
	'grey-lighter': '#f3f7f9',
	'grey-lightest': '#fafcfc',
	white: '#d1dbf9',

	'red-darkest': '#420806',
	'red-darker': '#6a1b19',
	'red-dark': '#cc1f1a',
	red: '#bc899f',
	'red-light': '#ef5753',
	'red-lighter': '#f9acaa',
	'red-lightest': '#fcebea',

	'orange-darkest': '#542605',
	'orange-darker': '#7f4012',
	'orange-dark': '#c1611f',
	orange: '#e07628',
	'orange-light': '#ffa31b',
	'orange-lighter': '#fcd9b6',
	'orange-lightest': '#fff5eb',

	'yellow-darkest': '#453411',
	'yellow-darker': '#684f1d',
	'yellow-dark': '#f2d024',
	yellow: '#e9af32',
	'yellow-light': '#fff382',
	'yellow-lighter': '#fff9c2',
	'yellow-lightest': '#fcfbeb',

	'green-darkest': '#032d19',
	'green-darker': '#0b4228',
	'green-dark': '#1f9d55',
	green: '#89bc90',
	'green-light': '#51d88a',
	'green-lighter': '#a2f5bf',
	'green-lightest': '#e3fcec',

	'teal-darkest': '#0d3331',
	'teal-darker': '#174e4b',
	'teal-dark': '#38a89d',
	teal: '#89bcbb',
	'teal-light': '#64d5ca',
	'teal-lighter': '#a0f0ed',
	'teal-lightest': '#e8fffe',

	'blue-darkest': '#0a224e',
	'blue-darker': '#103d60',
	'blue-dark': '#2779bd',
	blue: '#8694b7',
	'blue-light': '#6cb2eb',
	'blue-lighter': '#bcdefa',
	'blue-lightest': '#eff8ff',

	'indigo-darkest': '#191e38',
	'indigo-darker': '#2f365f',
	'indigo-dark': '#5661b3',
	indigo: '#8993bc',
	'indigo-light': '#7886d7',
	'indigo-lighter': '#b2b7ff',
	'indigo-lightest': '#e6e8ff',

	'purple-darkest': '#1f133f',
	'purple-darker': '#352465',
	'purple-dark': '#794acf',
	purple: '#9389bc',
	'purple-light': '#a779e9',
	'purple-lighter': '#d6bbfc',
	'purple-lightest': '#f3ebff',

	'pink-darkest': '#45051e',
	'pink-darker': '#72173a',
	'pink-dark': '#eb5286',
	pink: '#f2d2e9',
	'pink-light': '#fa7ea8',
	'pink-lighter': '#ffbbca',
	'pink-lightest': '#ffebef',
};
const customConfig = {
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
	colors,
	screens: {
		sm: '400px',
		md: '600px',
		lg: '900px',
		xl: '1200px',
		xxl: '1600px',
	},
	fonts: {
		sans: [
			'Open Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'Segoe UI',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'Fira Sans',
			'Droid Sans',
			'Helvetica Neue',
			'sans-serif',
		],
		serif: [
			'Cantata One',
			'Constantia',
			'Lucida Bright',
			'Lucidabright',
			'Lucida Serif',
			'Lucida',
			'DejaVu Serif',
			'Bitstream Vera Serif',
			'Liberation Serif',
			'Georgia',
			'serif',
		],
		mono: [
			'Menlo',
			'Monaco',
			'Consolas',
			'Liberation Mono',
			'Courier New',
			'monospace',
		],
	},
	textSizes: {
		xs: '.75rem', // 12px
		sm: '.875rem', // 14px
		base: '1rem', // 16px
		lg: '1.125rem', // 18px
		xl: '1.25rem', // 20px
		'2xl': '1.5rem', // 24px
		'3xl': '1.875rem', // 30px
		'4xl': '2.25rem', // 36px
		'5xl': '3rem', // 48px
		'6xl': '5rem',
		'7xl': '8rem',
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	leading: {
		none: 1,
		tight: 1.25,
		normal: 1.5,
		loose: 2,
	},
	tracking: {
		tight: '-0.05em',
		normal: '0',
		wide: '0.05em',
	},
	textColors: colors,
	backgroundColors: colors,
	borderWidths: {
		default: '1px',
		'0': '0',
		'2': '2px',
		'4': '4px',
		'8': '8px',
	},
	borderColors: Object.assign({ default: colors['grey-light'] }, colors),
	borderRadius: {
		none: '0',
		sm: '.125rem',
		default: '.25rem',
		lg: '.5rem',
		full: '9999px',
	},
	width: {
		auto: 'auto',
		px: '1px',
		'1': '0.25rem',
		'2': '0.5rem',
		'3': '0.75rem',
		'4': '1rem',
		'6': '1.5rem',
		'8': '2rem',
		'10': '2.5rem',
		'12': '3rem',
		'16': '4rem',
		'24': '6rem',
		'32': '8rem',
		'48': '12rem',
		'64': '16rem',
		'1/2': '50%',
		'1/3': '33.33333%',
		'2/3': '66.66667%',
		'1/4': '25%',
		'3/4': '75%',
		'1/5': '20%',
		'2/5': '40%',
		'3/5': '60%',
		'4/5': '80%',
		'1/6': '16.66667%',
		'5/6': '83.33333%',
		full: '100%',
		screen: '100vw',
	},
	height: {
		auto: 'auto',
		px: '1px',
		'1': '0.25rem',
		'2': '0.5rem',
		'3': '0.75rem',
		'4': '1rem',
		'6': '1.5rem',
		'8': '2rem',
		'10': '2.5rem',
		'12': '3rem',
		'16': '4rem',
		'24': '6rem',
		'32': '8rem',
		'48': '12rem',
		'64': '16rem',
		full: '100%',
		screen: '100vh',
	},
	minWidth: {
		'0': '0',
		full: '100%',
	},
	minHeight: {
		'0': '0',
		full: '100%',
		screen: '100vh',
	},
	maxWidth: {
		xs: '20rem',
		sm: '30rem',
		md: '40rem',
		lg: '50rem',
		xl: '60rem',
		'2xl': '70rem',
		'3xl': '80rem',
		'4xl': '90rem',
		'5xl': '100rem',
		full: '100%',
	},
	maxHeight: {
		full: '100%',
		screen: '100vh',
	},
	padding: {
		px: '1px',
		'0': '0',
		'1': '0.25rem',
		'2': '0.5rem',
		'3': '0.75rem',
		'4': '1rem',
		'6': '1.5rem',
		'8': '2rem',
		'12': '3rem',
		'16': '4rem',
		'24': '6rem',
		'32': '8rem',
	},
	margin: {
		auto: 'auto',
		px: '1px',
		'0': '0',
		'1': '0.25rem',
		'2': '0.5rem',
		'3': '0.75rem',
		'4': '1rem',
		'6': '1.5rem',
		'8': '2rem',
	},
	negativeMargin: {
		px: '1px',
		'0': '0',
		'1': '0.25rem',
		'2': '0.5rem',
		'3': '0.75rem',
		'4': '1rem',
		'6': '1.5rem',
		'8': '2rem',
	},
	shadows: {
		default: '0 2px 4px 0 rgba(0,0,0,0.10)',
		md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
		lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		none: 'none',
	},
	zIndex: {
		auto: 'auto',
		'0': 0,
		'10': 10,
		'20': 20,
		'30': 30,
		'40': 40,
		'50': 50,
	},
	opacity: {
		'0': '0',
		'25': '.25',
		'50': '.5',
		'75': '.75',
		'100': '1',
	},
	options: {
		prefix: '',
		important: false,
	},
};

module.exports = resolveConfig(customConfig);
