import React, { useState } from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"

// styled-component
import { Container } from "../../styles/globalStyles"
import { HeaderWorks, ProjectsList, NavVideos } from "../../styles/homeStyles"

const HomeWorks = ({ onCursor, projects }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
    caption: "",
  })

  return (
    <Container>
      <HeaderWorks>
        Here's small overview of <br />
        my projects
      </HeaderWorks>
      <ProjectsList>
        <ul>
          {projects.map(project => (
            <motion.li
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
        </ul>
      </ProjectsList>
      <NavVideos>
        <motion.div
          animate={{ width: revealVideo.show ? 0 : "100%" }}
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
