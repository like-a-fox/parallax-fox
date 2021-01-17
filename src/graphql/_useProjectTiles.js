import { graphql, useStaticQuery } from 'gatsby';
import { backgrounds } from '../styles';
export const useProjectTiles = () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					tiles {
						pathname
						subtitle
						title
					}
				}
			}
		}
	`);
	if (data) {
		return data?.site?.siteMetadata?.tiles.map(
			({ pathname, title, subtitle }, index) => {
				const { src } = backgrounds.find((image) => image.label === pathname);

				return {
					id: `${pathname}-${index}`,
					title,
					subtitle,
					pathname,
					src,
				};
			}
		);
	}
};
