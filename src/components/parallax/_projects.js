import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  ProjectsWrapper,
  LinkWrapper,
  TitleWrapper,
  Text,
  Title,
  Content,
  Inner,
} from '../../styles'
import { tile_data } from './_tile_data'
import { LowerProjectsDivider, MiddleProjectsDivider } from './_dividers'

export default () => {
  const data = useStaticQuery(graphql`
    query TileBackgroundImages {
      __typename
      allImageSharp(
        filter: { fluid: { originalName: { glob: "*_background*" } } }
      ) {
        nodes {
          id
          fluid(fit: COVER) {
            srcWebp
            originalName
          }
        }
      }
    }
  `)
  return (
    <>
      <MiddleProjectsDivider />
      <Content speed={0.4} offset={`${1}.2`} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            {data.allImageSharp.nodes.map(
              ({ id, fluid: { srcWebp, originalName } }) => {
                let tile = tile_data[`${originalName.split('_')[0]}`]
                let { path, title, subtitle } = tile
                return (
                  <LinkWrapper key={id} to={path} bg={srcWebp}>
                    <TitleWrapper>
                      {title}
                      <Text>{subtitle}</Text>
                    </TitleWrapper>
                  </LinkWrapper>
                )
              }
            )}
          </ProjectsWrapper>
        </Inner>
      </Content>
      <LowerProjectsDivider />
    </>
  )
}
