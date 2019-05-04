const path = require(`path`)
const lodash = require("lodash")

const { kebabCase } = lodash

const createSlug = (title, company) => `/${kebabCase(`${title} at ${company}`)}/`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/pages/index.js`)
  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                company
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const slug = createSlug(post.node.frontmatter.title, post.node.frontmatter.company)
      // company-title
      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createSlug(node.frontmatter.title, node.frontmatter.company)
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
