import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

//Components
import HomeHeader from "../components/homePage/homeHeader"
import HomeAbout from "../components/homePage/homeAbout"
import HomeWorks from "../components/homePage/homeWorks"
import HomeContact from "../components/homePage/homeContact"

// styledComponent
import { HomePanelBackground } from "../styles/projectStyles"

//
import { AnimatePresence } from "framer-motion"

//Data
import { graphql } from "gatsby"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const HomePanels = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll")
    } else {
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [canScroll])

  return (
    <>
      <HomePanelBackground
        onAnimationComplete={() => setCanScroll(true)}
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{
          ...transition,
          duration: 2,
          times: [0, 0.5, 1],
        }}
      ></HomePanelBackground>
    </>
  )
}

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
      <HomeWorks onCursor={onCursor} projects={projects}></HomeWorks>
      <HomeAbout onCursor={onCursor}></HomeAbout>
      <HomeContact onCursor={onCursor}></HomeContact>
      {/* <HomePanels></HomePanels> */}
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
