import React from "react"
import Layout from "../components/layout"

//Components
import HomeHeader from "../components/homePage/homeHeader"
import HomeAbout from "../components/homePage/homeAbout"
import HomeWorks from "../components/homePage/homeWorks"
import HomeContact from "../components/homePage/homeContact"
import Project from "../templates/project"

//

//Data
import { graphql } from "gatsby"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    // includes permet de savoir si un string existe à l'intérieur d'un tableau
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false // si il existe pas on met cursorType à false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType }) // ici on peut même remplacer le dernier cursorType par 'hovered' ou "pointer"
    // avec le dispatch on update le cursorType avec ce que le cursorType (passe en event à notre fonction) est actuellement
  }

  const {
    allStrapiProjects: { nodes: projects },
  } = props.data

  return (
    <Layout>
      <HomeHeader onCursor={onCursor}></HomeHeader>
      <HomeAbout onCursor={onCursor}></HomeAbout>
      <HomeWorks onCursor={onCursor} projects={projects}></HomeWorks>
      <HomeContact onCursor={onCursor}></HomeContact>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
