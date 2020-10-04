import React, { useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { AnimatePresence } from "framer-motion"

// hook
import useWindowSize from "../hooks/useWindowSize"

// styled-component
import {
  AppContainer,
  ScrollContainer,
  ContainerProject,
  TitleProject,
  ContainerInfoProject,
  InfoProject,
  ContainerIntroProject,
  IntroProject,
  ContainerImage,
  ContainerNextPrevProject,
  ReturnButton,
  RightPanelBackground,
} from "../styles/projectStyles"
import { Flex } from "../styles/globalStyles"

const Project = props => {
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
  useEffect(() => {
    setBodyHeight()
  }, [size.height])

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
    const skew = velocity * 7.5

    //Assign skew and smooth scrolling to the scroll container
    {
      scrollContainer.current &&
        (scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`)
    }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  const {
    allStrapiProjects: { nodes: projects },
  } = props.data

  const { next, prev } = props.pageContext
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <Layout>
      {/* Add this to AppContainer */}
      {/* initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible", transition: { delay: 1 } }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }} */}

      {/* transition={{ ...transition }}
          initial={{ opacity: 0, skewY: 3, y: 100 }}
          animate={{ opacity: 1, skewY: 0, y: 0 }}
          exit={{ opacity: 0, skewY: 0, y: 0 }}
          key={projects[0].url} */}
      <AppContainer
        ref={app}
        transition={{ ...transition }}
        initial={{ opacity: 0, skewY: 3, y: 100 }}
        animate={{ opacity: 1, skewY: 0, y: 0 }}
        exit={{ opacity: 0, skewY: 0, y: 0 }}
        key={projects[0].url}
      >
        <ScrollContainer ref={scrollContainer}>
          <ReturnButton>
            <Link to={`/`}>Retour home</Link>
          </ReturnButton>
          <ContainerProject>
            <TitleProject>{projects[0].title}</TitleProject>
          </ContainerProject>
          <ContainerInfoProject>
            <InfoProject>
              <li>Year</li>
              <li>{projects[0].year}</li>
            </InfoProject>
            <InfoProject>
              <li>Rôle</li>
              <li>{projects[0].role}</li>
            </InfoProject>
            <InfoProject>
              <li>Techno</li>
              <li>Angular</li>
            </InfoProject>
          </ContainerInfoProject>
          <ContainerIntroProject>
            <IntroProject>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              impedit earum numquam laboriosam, nisi illo officia, nemo
              voluptatem animi odio ex dolor eligendi nam. Voluptatibus soluta
              neque debitis numquam blanditiis.
              <br /> <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              aliquam unde voluptas, a neque eaque asperiores necessitatibus
              voluptatibus fuga adipisci earum veritatis ipsum quisquam aperiam
              similique explicabo, cumque soluta. Sint.
            </IntroProject>
          </ContainerIntroProject>

          {projects[0].firstImage && (
            <ContainerImage>
              <Image
                fluid={projects[0].firstImage.childImageSharp.fluid}
              ></Image>
            </ContainerImage>
          )}

          {projects[0].secondImage && (
            <ContainerImage>
              <Image
                fluid={projects[0].secondImage.childImageSharp.fluid}
              ></Image>
            </ContainerImage>
          )}

          {projects[0].thirdImage && (
            <ContainerImage>
              <Image
                fluid={projects[0].thirdImage.childImageSharp.fluid}
              ></Image>
            </ContainerImage>
          )}

          <ContainerNextPrevProject>
            {next && <Link to={`/${next.url}`}>Go to next project</Link>}
            {prev && <Link to={`/${prev.url}`}>Go to previous Project</Link>}
            {/* <Link to={`${prev.url}`}>Previous Project</Link> */}
          </ContainerNextPrevProject>
        </ScrollContainer>
      </AppContainer>

      {/* <Panels /> */}
    </Layout>
  )
}

const Panels = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <>
      {/* <LeftPanelBackground
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
        transition={{
          ...transition,
          duration: 2,
          times: [0, 0.5, 1],
          delay: 0.3,
        }}
      ></LeftPanelBackground> */}
      <RightPanelBackground
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{
          ...transition,
          duration: 2,
          times: [0, 0.5, 1],
        }}
      ></RightPanelBackground>
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
        year
        role
        firstImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thirdImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
