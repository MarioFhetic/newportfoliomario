import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { motion } from "framer-motion"

import { Link } from "gatsby"

import { Container } from "../../styles/globalStyles"
import {
  TitleAbout,
  ContainerTextAbout,
  TextAbout,
  UnderlineWord,
} from "../../styles/homeStyles"

const HomeAbout = ({ onCursor }) => {
  // First view

  const aboutAnimation = useAnimation()

  const [titleAbout, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-170px",
  })

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) aboutAnimation.start("visible")
  }, [aboutAnimation, inView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  // End First view

  // Second view

  const contentAboutAnimation = useAnimation()

  const [contentAbout, secondView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-170px",
  })

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (secondView) contentAboutAnimation.start("visible")
  }, [contentAboutAnimation, secondView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  // End Second view

  return (
    <>
      <Container>
        <TitleAbout
          ref={titleAbout}
          animate={aboutAnimation}
          initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.9],
              },
            },
            hidden: {
              opacity: 0,
              y: 50,
            },
          }}
        >
          My name is Mario, I'm 21
          <br /> and I come from Paris
        </TitleAbout>
        {/* ref={contentAbout}
          animate={contentAboutAnimation}
          initial="hidden" 
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.9],
              },
            },
            hidden: {
              opacity: 0,
              y: 50,
            },
          }} */}
        <ContainerTextAbout>
          <TextAbout
            ref={contentAbout}
            animate={contentAboutAnimation}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.6,
                  duration: 1,
                  ease: [0.6, -0.05, 0.01, 0.9],
                }, // cubic-bezier(0.77,0,0.18,1); // cubic-bezier(0.18,0.89,0.32,1.27);
              },
            }}
            initial="hidden"
          >
            <motion.span
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  skewX: 0,
                },
                hidden: {
                  opacity: 0,
                  y: -10,
                  skewX: -15,
                },
              }}
            >
              As a student at the end of the 3th year of the Grand{" "}
              <a href="https://www.hetic.net/">
                <UnderlineWord>HETIC</UnderlineWord>
              </a>{" "}
            </motion.span>
            <motion.span
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  skewX: 0,
                },
                hidden: {
                  opacity: 0,
                  y: -10,
                  skewX: -15,
                },
              }}
            >
              School program, I am looking for a 4 to 6-month internship from
              July 1st to October 4th. I'm available for{" "}
              <a href="https://www.malt.fr/profile/mariofayolle">
                <UnderlineWord>freelance project</UnderlineWord>
              </a>{" "}
            </motion.span>
            <motion.span
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  skewX: 0,
                },
                hidden: {
                  opacity: 0,
                  y: -10,
                  skewX: -15,
                },
              }}
            >
              Feel free to <UnderlineWord>contact</UnderlineWord> me
            </motion.span>
          </TextAbout>
        </ContainerTextAbout>
      </Container>
      {/* <Container>
        <Flex>
          <SvgContent>
            <GraduationSvg></GraduationSvg>
          </SvgContent>
          <TextContent>
            <h3>Who am I ?</h3>

            <p>
              As a student at the end of the 4th year of the HETIC Grand School
              program, I am looking for a 3-month internship from July 1st to
              October 4th. This training is versatile and has focused, during
              these first three years, on technology and code, web design, digital
              marketing and project management.
            </p>
          </TextContent>
        </Flex>
        <Flex>
          <TextContent>
            <h3>Who am I ?</h3>

            <p>
              Over the past two years, I have acquired some development and
              design skills that should help me to be useful. Passionate about
              football and sports, I feel at home in a team in which I can
              easily find my place. In group projects, I contribute to the
              fluidity of relationships and the synergy of individual skills. I
              am curious about what others can teach me and what I can bring to
              them.
            </p>
          </TextContent>
          <SvgContent>
            <SoccerSvg></SoccerSvg>
          </SvgContent>
        </Flex>
              </Container>
 */}
    </>
  )
}

export default HomeAbout
