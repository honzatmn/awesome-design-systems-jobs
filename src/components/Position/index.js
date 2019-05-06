import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import { StyledPosition, StyledContent } from "./Position.styled"
import Stack from "../Stack"
import CompanyLogo from "../CompanyLogo"
import List, { ListItem } from "../List"
import { Location } from "../../icons/index"
import CompanyDesignSystem from "../CompanyDesignSystem"
import Layout from "../Layout"
import Badge from "../Badge"

const Position = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const { design_system: designSystem, locations, company, title } = post.frontmatter
  return (
    <Layout>
      <StyledPosition>
        <Stack>
          <Badge>New!</Badge>
          <div>Posted 2 days ago</div>
        </Stack>
        <Stack>
          <h1>{title}</h1>
          <CompanyLogo />
        </Stack>
        <Stack direction="column">
          <div>{company}</div>
          <List direction="row">
            {locations.map((location, key) => {
              const index = `location-${key}`
              return (
                <ListItem icon={<Location />} key={index}>
                  {location}
                </ListItem>
              )
            })}
          </List>
        </Stack>
        {designSystem && <CompanyDesignSystem url={designSystem} company={company} />}
        <StyledContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledPosition>
    </Layout>
  )
}

export default Position

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        company
        link
        design_system
        locations
      }
    }
  }
`
