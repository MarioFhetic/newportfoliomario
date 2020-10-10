import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { motion, useAnimation } from "framer-motion"

//view
import { useInView } from "react-intersection-observer"

// styled-component
import { Container } from "../../styles/globalStyles"
import {
  HeaderWorks,
  ContainerHeaderWorks,
  ProjectsList,
  NavVideos,
} from "../../styles/homeStyles"

const HomeWorks = ({ onCursor, projects }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
    caption: "",
  })

  // First view

  const animation = useAnimation()

  const [listOfProject, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-200px",
  })

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible")
  }, [animation, inView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  // End First view

  // Second View

  const titleAppear = useAnimation()

  const [titleWork, secondView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-200px",
  })

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (secondView) titleAppear.start("visible")
  }, [titleAppear, secondView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  // End Second View

  return (
    <Container>
      <ContainerHeaderWorks>
        <HeaderWorks
          ref={titleWork}
          animate={titleAppear}
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
          Here's small overview of <br />
          my projects
        </HeaderWorks>
      </ContainerHeaderWorks>
      <ProjectsList>
        <motion.ul
          ref={listOfProject}
          animate={animation}
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
          {projects.map(project => (
            <motion.li
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
              key={project.id}
              onMouseEnter={() => onCursor("workHovered")}
              onMouseLeave={() => onCursor(onCursor)}
              onHoverStart={() =>
                setRevealVideo({
                  show: true,
                  video: project.urlvideo,
                  key: project.id,
                })
              }
              onHoverEnd={() =>
                setRevealVideo({
                  show: false,
                  video: project.urlvideo,
                  key: project.id,
                })
              }
            >
              <Link to={`/${project.url}`}>
                {/* <div>
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 101 57"
                    >
                      <path
                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                        fill="#FFF"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span> */}
                {project.title}
                {/* </div> */}
              </Link>
              {/* <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 30 }}
                transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                {route.caption}
              </motion.span> */}
            </motion.li>
          ))}
        </motion.ul>
      </ProjectsList>
      <NavVideos>
        <motion.div
          animate={{ height: revealVideo.show ? 0 : "100%" }}
          className="reveal"
        ></motion.div>
        <div className="video">
          <video
            src={require(`../../assets/video/${revealVideo.video}`)}
            loop
            muted
            autoPlay
          ></video>
        </div>
      </NavVideos>
    </Container>
  )
}

export default HomeWorks
