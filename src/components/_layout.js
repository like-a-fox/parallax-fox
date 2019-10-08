import 'typeface-cantata-one'
import 'typeface-open-sans'
import React, { memo } from 'react'
import GlobalStyle from '../styles/global'
import SEO from './_seo'

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    {children}
  </>
)

export default memo(Layout)
