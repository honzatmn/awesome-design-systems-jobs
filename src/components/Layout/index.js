import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

// import Header from "./header"
import GlobalStyle from "../../theme/globalStyle"
import theme from "../../theme/theme"
import Main from "../Main"
import { StyledContainer, StyledHeader } from "./Layout.styled"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledContainer>
          <StyledHeader>Here should be the header</StyledHeader>
          <Main>{children}</Main>
        </StyledContainer>
      </>
    </ThemeProvider>
  )
}

export default Layout
