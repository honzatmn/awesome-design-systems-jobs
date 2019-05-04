import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import GlobalStyle from "../theme/globalStyle"
import theme from "../theme/theme"
import Main from "./Main"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 100%;
  height: 100vh;
`

const StyledHeader = styled.aside`
  flex: 1 0 280px;
  background-color: #cedcf2;
`

const StyledList = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1 0 340px;
  background-color: #e8edf5;
  overflow-y: auto;
`

const Layout = ({ children, location }) => {
  const [state, setState] = useState(location.pathname)
  const sorry = name => {
    window.history.pushState({ urlPath: name }, "", name)
    setState(name)
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                html
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <StyledContainer>
                <StyledHeader>Filters</StyledHeader>
                <StyledList>
                  {data.allMarkdownRemark.edges.map(position => {
                    console.log(position.node.fields.slug)
                    return (
                      <button
                        // to={`${position.node.fields.slug}#${position.node.fields.slug}`}
                        style={{
                          backgroundColor:
                            state === `/${position.node.fields.slug}/` ? "blue" : "transparent",
                          height: "200px",
                          flex: "0 0 200px",
                        }}
                        onClick={() => sorry(position.node.fields.slug)}
                      >
                        {position.node.frontmatter.title}
                      </button>
                    )
                  })}
                </StyledList>
                <Main>
                  {data.allMarkdownRemark.edges
                    .filter(position => state === position.node.fields.slug)
                    .map(position => (
                      <div
                        dangerouslySetInnerHTML={{ __html: position.node.html }}
                        key={position.node.fields.slug}
                      />
                    ))}
                </Main>
              </StyledContainer>
            </>
          </ThemeProvider>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
