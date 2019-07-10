const path = require(`path`)


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      // module: {
      //   rules: [
      //     {
      //       test: /react-stripe-elements/,
      //       use: loaders.null(),
      //     }
      //   ],
      // },
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/components/project.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}