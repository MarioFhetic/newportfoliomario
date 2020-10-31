import React, { useRef, useEffect, useState } from "react"
import Layout from "../components/layout"

//Components
import HomeHeader from "../components/homePage/homeHeader"
import HomeAbout from "../components/homePage/homeAbout"
import HomeWorks from "../components/homePage/homeWorks"
import HomeContact from "../components/homePage/homeContact"

//hooks
import useWindowSize from "../hooks/useWindowSize"

// styledComponent
import {
  HomePanelBackground,
  AppContainer,
  ScrollContainer,
} from "../styles/projectStyles"

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
  //Hook to grab window size
  const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef()
  const scrollContainer = useRef()

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])

  //set the height of the body.

  // this useEffect works with the build but not whit development mode
  if (typeof window !== `undefined`) {
    useEffect(() => {
      setBodyHeight()
    }, [size.height])
  }

  // this useEffect is for development mode
  // useEffect(() => {
  //   setBodyHeight()
  // }, [size.height])

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100

    // Difference between
    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 10

    //Assign skew and smooth scrolling to the scroll container
    {
      scrollContainer.current &&
        (scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`)
    }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const {
    allStrapiProjects: { nodes: projects },
  } = props.data

  return (
    <Layout>
      <AppContainer ref={app}>
        <ScrollContainer ref={scrollContainer}>
          <HomeHeader onCursor={onCursor}></HomeHeader>
          <HomeWorks onCursor={onCursor} projects={projects}></HomeWorks>
          <HomeAbout onCursor={onCursor}></HomeAbout>
          <HomeContact onCursor={onCursor}></HomeContact>
        </ScrollContainer>
      </AppContainer>

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
