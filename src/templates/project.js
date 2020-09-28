import React from "react"
import { graphql } from "gatsby"

const Project = props => {
  const {
    allStrapiProjects: { nodes: projects },
  } = props.data

  return (
    <>
      <h1>{projects[0].title}</h1>
    </>
  )
}

export default Project

export const query = graphql`
  query Project($id: String!) {
    allStrapiProjects(filter: { id: { eq: $id } }) {
      nodes {
        title
        id
        url
        description
        urlvideo
      }
    }
  }
`
