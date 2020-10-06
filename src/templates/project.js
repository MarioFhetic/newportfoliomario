import React, { useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { AnimatePresence, useAnimation } from "framer-motion"

import { useInView } from "react-intersection-observer"

// images animation

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
  ItemProject,
} from "../styles/projectStyles"

const Project = props => {
  const animation = useAnimation()

  const [firstImage, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-200px",
  })

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible")
  }, [animation, inView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  //////

  const animationother = useAnimation()

  const [secondImage, secondView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-200px",
  })

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (secondView) animationother.start("visible")
  }, [animationother, secondView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  /////

  const animationthird = useAnimation()

  const [thirdImage, thirdView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-200px",
  })

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (thirdView) animationthird.start("visible")
  }, [animationthird, thirdView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

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
    const skew = velocity * 10

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
      {console.log("inView", inView)}
      {console.log("secondView", secondView)}
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
              <ItemProject>Techno</ItemProject>
              <ItemProject>Angular</ItemProject>
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
            <ContainerImage
              ref={firstImage}
              animate={animation}
              initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.3, ease: [0.6, -0.05, 0.01, 0.9] }, // cubic-bezier(1,0,0,1);
                  skewY: 0,
                },
                hidden: {
                  opacity: 0,
                  y: 50,
                  skewY: 5,
                },
              }}
            >
              <Image
                fluid={projects[0].firstImage.childImageSharp.fluid}
              ></Image>
            </ContainerImage>
          )}

          {projects[0].secondImage && (
            <ContainerImage
              ref={secondImage}
              animate={animationother}
              initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.3,
                    ease: [0.6, -0.05, 0.01, 0.9],
                  }, // cubic-bezier(0.77,0,0.18,1); // cubic-bezier(0.18,0.89,0.32,1.27);
                  skewY: 0,
                },
                hidden: {
                  opacity: 0,
                  y: 50,
                  skewY: 5,
                },
              }}
            >
              <Image
                fluid={projects[0].secondImage.childImageSharp.fluid}
              ></Image>
            </ContainerImage>
          )}

          {projects[0].thirdImage && (
            <ContainerImage
              ref={thirdImage}
              animate={animationthird}
              initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.3, ease: [0.6, -0.05, 0.01, 0.9] }, // cubic-bezier(0.77,0,0.18,1); // cubic-bezier(0.18,0.89,0.32,1.27);
                  skewY: 0,
                },
                hidden: {
                  opacity: 0,
                  y: 50,
                  skewY: 5,
                },
              }}
            >
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
