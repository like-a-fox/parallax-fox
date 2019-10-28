const arrayOfTiles = [
	{
		title: 'Angular',
		subtitle: '2+ None of that AngularJS Shit',
		pathname: 'angular',
	},
	{
		title: 'Firebase',
		subtitle: `For when you're smart enough to see backends are arcaine`,
		pathname: 'firebase',
	},
	{
		title: 'GraphQL',
		subtitle: `Teaching the world to heal from Redux`,
		pathname: 'graphql',
	},
	{
		title: 'Gatsby',
		subtitle: `React meets GraphQL - What could be better?`,
		pathname: 'gatsbyjs',
	},
	{
		title: 'React',
		subtitle: `A better library that jQuery`,
		pathname: 'react',
	},
	{
		title: 'RxJS',
		subtitle: `Observe it alllllll`,
		pathname: 'rxjs',
	},
];

const tiles = arrayOfTiles.reduce(
	(prev, { title, subtitle, pathname }) => ({
		...prev,
		[pathname]: {
			title,
			subtitle,
			path: `/${pathname}`,
		},
	}),
	{}
);
export const tile_data = { ...tiles };
