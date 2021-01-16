import { graphql, useStaticQuery } from 'gatsby';
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
			allImageSharp(
				filter: {
					fluid: { originalName: { glob: "*_background.{png,jpg,jpeg}" } }
				}
			) {
				edges {
					node {
						id
						fluid {
							src
							originalName
						}
					}
				}
			}
		}
	`);
	if (data) {
		return data?.site?.siteMetadata?.tiles.map(
			({ pathname, title, subtitle }) => {
				const imageData = data?.allImageSharp?.edges.find(({ node }) =>
					node?.fluid?.originalName.includes(pathname)
				);
				const { id, fluid } = imageData?.node;
				return {
					id,
					title,
					subtitle,
					pathname,
					...fluid,
				};
			}
		);
	}
};
