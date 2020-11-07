import React, { useRef, useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import {
  AnimatePresence,
  useAnimation,
  useViewportScroll,
  useTransform,
  motion,
} from "framer-motion"

// Link animation
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { useInView } from "react-intersection-observer"
// MOON/SUN ICONS
import { CloseSvg } from "../assets/svg/close"
// images animation

// hook
import useWindowSize from "../hooks/useWindowSize"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import SEO from "../components/seo"

// import WebGL from "../webGL/webGL"
// import { WebglContainer } from "../styles/homeStyles"

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
  SeparatorLine,
  BigContainerWrapperScrollProgress,
  WrapperScrollProgress,
  ContainerScrollProgress,
  ItemScrollProgress,
  ContainerRightSide,
  ContainerItemRightSide,
  TitleRightSide,
  ContainerLeftSideAccordion,
  AccordionContent,
  AccordionIcon,
} from "../styles/projectStyles"

const Project = props => {
  const animation = useAnimation()

  const [firstImage, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-160px",
  })

  useEffect(() => {
    if (inView) animation.start("visible")
  }, [animation, inView])

  //////

  const animationother = useAnimation()

  const [secondImage, secondView] = useInView({
    triggerOnce: true,
    rootMargin: "-160px",
  })

  useEffect(() => {
    if (secondView) animationother.start("visible")
  }, [animationother, secondView])

  /////

  const animationthird = useAnimation()

  const [thirdImage, thirdView] = useInView({
    triggerOnce: true,
    rootMargin: "-160px",
  })

  useEffect(() => {
    if (thirdView) animationthird.start("visible")
  }, [animationthird, thirdView])

  //Hook to grab window size
  const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef()
  const scrollContainer = useRef()

  // Configs skew scroll
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

  // this useEffect works with the build but not whit development mode
  if (typeof window !== `undefined`) {
    useEffect(() => {
      setBodyHeight()
    }, [size.height])
  }

  //set the height of the body.
  // useEffect(() => {
  //   setBodyHeight()
  // }, [size.height])

  //Set the height of the body to the height of the scrolling div
  // I
  const setBodyHeight = () => {
    if (scrollContainer.current) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`
    }
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

  const { scrollYProgress } = useViewportScroll()
  // const scale = useTransform(scrollYProgress);
  const scale = useTransform(scrollYProgress, [0, 0], [0.1, 1])
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const {
    allStrapiProjects: { nodes: projects },
  } = props.data

  const { next, prev } = props.pageContext
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9], delay: 1 }

  // responsive
  const breakpoints = useBreakpoint()

  // ACCORDION SECTION
  const [expanded, setExpanded] = useState(false)
  const Accordion = ({ expanded, setExpanded }) => {
    const isOpen = expanded
    return (
      <>
        <AccordionIcon onClick={() => setExpanded(isOpen ? false : true)}>
          <motion.span
            animate={{ rotate: isOpen ? 90 : 45, y: 0, x: -8 }}
            transition={{ duration: 0.1, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 90 : -45, y: 5, x: -8 }}
            transition={{ duration: 0.1, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        <AccordionContent
          key="content"
          animate={{ width: isOpen ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <motion.a
            href="https://www.linkedin.com/in/mario-fayolle/"
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
            whileHover={{ letterSpacing: "0.02rem" }}
          >
            Linkedin
          </motion.a>
          <motion.a
            href="https://dribbble.com/mariofayolle/"
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
            whileHover={{ letterSpacing: "0.02rem" }}
          >
            Dribbble
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mariofyl/"
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
            whileHover={{ letterSpacing: "0.02rem" }}
          >
            Instagram
          </motion.a>
        </AccordionContent>
      </>
    )
  }

  // END ACCORDION SECTION

  return (
    <Layout>
      <SEO title={projects[0].title} description={projects[0].description} />
      {/* In AppContainer : 
          transition={{ ...transition }}
          initial={{ opacity: 0, skewY: 3, y: 100 }}
          animate={{ opacity: 1, skewY: 0, y: 0 }}
          exit={{ opacity: 0, skewY: 0, y: 0 }}
       */}
      <AnimatePresence>
        <AppContainer
          ref={app}
          key={projects[0].url}
          transition={{ ...transition }}
          initial={{ opacity: 0, skewY: 3, y: 100 }}
          animate={{ opacity: 1, skewY: 0, y: 0 }}
          exit={{ opacity: 0, skewY: 0, y: 0 }}
        >
          {breakpoints.sm ? (
            ""
          ) : (
            <BigContainerWrapperScrollProgress>
              <WrapperScrollProgress>
                <ContainerScrollProgress
                  style={{
                    scale,
                  }}
                >
                  <ItemScrollProgress
                    style={{
                      scaleY: scrollYProgress,
                    }}
                  />
                </ContainerScrollProgress>
              </WrapperScrollProgress>
            </BigContainerWrapperScrollProgress>
          )}

          {breakpoints.sm ? (
            ""
          ) : (
            <ContainerRightSide>
              <ContainerItemRightSide>
                <TitleRightSide
                  transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                  whileHover={{ letterSpacing: "0rem" }}
                >
                  Projects
                </TitleRightSide>
              </ContainerItemRightSide>
            </ContainerRightSide>
          )}

          {breakpoints.sm ? (
            ""
          ) : (
            <ContainerLeftSideAccordion>
              <Accordion expanded={expanded} setExpanded={setExpanded} />
            </ContainerLeftSideAccordion>
          )}

          <ScrollContainer ref={scrollContainer}>
            <header>
              <ContainerProject>
                <ReturnButton style={{ maxWidth: "100px" }}>
                  <AniLink fade duration={0.5} to={`/`}>
                    <CloseSvg />
                  </AniLink>
                </ReturnButton>
                <TitleProject
                  transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
                  whileHover={{ letterSpacing: "0rem" }}
                >
                  {projects[0].title}
                </TitleProject>
              </ContainerProject>
              <ContainerIntroProject>
                <IntroProject>{projects[0].description_project}</IntroProject>
              </ContainerIntroProject>
              <ContainerInfoProject>
                <InfoProject>
                  <li>{projects[0].year}</li>
                </InfoProject>
                <InfoProject>
                  <li>{projects[0].role}</li>
                </InfoProject>
                <InfoProject>
                  <ItemProject>
                    {projects[0].stack.map((item, i) => {
                      return (
                        <img
                          key={i}
                          src={require(`../assets/technoIcon/${item.title}`)}
                          alt={item.title}
                        />
                      )
                    })}
                  </ItemProject>
                </InfoProject>
              </ContainerInfoProject>
            </header>

            <main>
              {/* {projects[0].images.map((item, i) => {
                return (
                  <>
                    <ContainerImage>
                      <Image
                        initial="hidden"
                        key={item.id}
                        fluid={item.image.childImageSharp.fluid}
                      ></Image>
                    </ContainerImage>
                  </>
                )
              })} */}
              {projects[0].firstImage && (
                <ContainerImage
                  ref={firstImage}
                  animate={animation}
                  initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1.3,
                        ease: [0.6, -0.05, 0.01, 0.9],
                      }, // cubic-bezier(1,0,0,1);
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
                    fluid={projects[0].thirdImage.childImageSharp.fluid}
                  ></Image>
                </ContainerImage>
              )}
              {projects[0].fourthImage && (
                <ContainerImage
                  ref={thirdImage}
                  animate={animationthird}
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
                    fluid={projects[0].fourthImage.childImageSharp.fluid}
                  ></Image>
                </ContainerImage>
              )}
              {projects[0].fifthImage && (
                <ContainerImage
                  ref={thirdImage}
                  animate={animationthird}
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
                    fluid={projects[0].fifthImage.childImageSharp.fluid}
                  ></Image>
                </ContainerImage>
              )}
              {projects[0].sixImage && (
                <ContainerImage
                  ref={thirdImage}
                  animate={animationthird}
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
                    fluid={projects[0].sixImage.childImageSharp.fluid}
                  ></Image>
                </ContainerImage>
              )}
              {projects[0].sevenImage && (
                <ContainerImage
                  ref={thirdImage}
                  animate={animationthird}
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
                    fluid={projects[0].sevenImage.childImageSharp.fluid}
                  ></Image>
                </ContainerImage>
              )}
            </main>
            <footer>
              <SeparatorLine />
              <ContainerNextPrevProject>
                {prev && (
                  <AniLink fade duration={1} to={`/${prev.url}`}>
                    {breakpoints.sm ? "Previous" : "Previous Project"}
                  </AniLink>
                )}
                {next && (
                  <AniLink fade duration={1} to={`/${next.url}`}>
                    {breakpoints.sm ? "Next" : "Next Project"}
                  </AniLink>
                )}
                {/* <Link to={`${prev.url}`}>Previous Project</Link>  */}
              </ContainerNextPrevProject>
            </footer>
          </ScrollContainer>
        </AppContainer>
      </AnimatePresence>
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
        description
        id
        url
        year
        role
        firstImage {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondImage {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thirdImage {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fourthImage {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fifthImage {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sixImage {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sevenImage {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
        description_project
      }
    }
  }
`
// DYNAMICLY IMAGE

// images {
//   id
//   image {
//     childImageSharp {
//       fluid(maxWidth: 2000, quality: 100) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
