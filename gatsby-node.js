const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `
    {
        allStrapiProjects {
        edges {
          node {
            id
            url
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiProjects.edges.forEach(({ node }, index) => {
      createPage({
        path: `/${node.url}`,
        component: path.resolve(`src/templates/project.js`),
        context: {
          id: node.id,
          prev:
            index === 0
              ? null
              : result.data.allStrapiProjects.edges[index - 1].node,
          next:
            index === result.data.allStrapiProjects.edges.length - 1
              ? null
              : result.data.allStrapiProjects.edges[index + 1].node,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return getArticles
}
