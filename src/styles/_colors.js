import { colors } from '../../tailwind';

const hex_to_rgba = (hex, opacity = 100) =>
	hex.includes('#') &&
	Array.from(hex, (v, k) => k > 0 && v).reduce(
		(rgba, hex_sub, index) =>
			`${rgba}(${hex_sub}${
				index === 5 ? opacity / 100 + ')' : index % 2 ? ',' : ''
			}`,
		'rgba'
	);

const rgb_to_hex = (rgb) =>
	rgb.reduce((hex, rgb, index) => {
		rgb = Number(rgb).toString(16);
		rgb = rgb.length < 2 ? `0${rgb}` : rgb;
		return `${hex}${index > 3 ? '' : rgb}`;
	}, '#');

const color_definitions = (red, green, blue) =>
	red > blue
		? red > green
			? 'red'
			: 'yellow'
		: green > red
		? green > blue
			? 'green'
			: 'cyan'
		: blue > green
		? blue > red
			? 'blue'
			: 'violet'
		: 'shade';

const color_callback = (depth, level, index, rgb) => {
	const value = rgb * index * level;
	return rgb < 0
		? value + depth * level
		: rgb > 0
		? rgb === depth
			? depth * level
			: value
		: 0;
};
const color_matrix = (level) => [
	[1, 0, 0],
	[255 / level, 1, 0],
	[-1, 255 / level, 0],
	[0, 255 / level, 1],
	[0, -1, 255 / level],
	[1, 0, -1],
	[1, 1, 1],
];
export const create_colors = (level = 5) =>
	color_matrix(level)
		.map((v) =>
			Array.from({ length: 255 / level }, (_, index) =>
				v.map((rgb) => color_callback(255 / level, level, index, rgb))
			)
		)
		.reduce(
			(indexed, color) => ({
				...indexed,
				[color_definitions(...color[0])]: color.map((swatch) => ({
					rgb: `rgb(${swatch})`,
					hex: rgb_to_hex(swatch),
				})),
			}),
			{}
		);

export const _palette = (color_str = 'white') => `${colors[color_str]}`;

export const _transparentize = (color_str = 'white', opacity = 100) =>
	`${hex_to_rgba(_palette(color_str), opacity)}`;

export default (opacity = 100) => ({
	primary: _transparentize('pink', opacity),
	secondary: _transparentize('perpSkiz', opacity),
	tertiary: _transparentize('tealDerp', opacity),
	main: _transparentize('white', opacity),
	grey: _transparentize('grey', opacity),
});
