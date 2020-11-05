import React from "react"

import { Container } from "../../styles/globalStyles"
import { ContainerSocial, ContainerSocialIcon } from "../../styles/homeStyles"
import { Linkedin, Instagram, Dribbble } from "../../assets/svg/social-icons"

import { motion } from "framer-motion"

const HomeContact = () => {
  return (
    <Container>
      <ContainerSocial>
        <span>
          © 2020 Mario Fayolle | Design - Développement - Mario Fayolle
        </span>
        <ContainerSocialIcon>
          <motion.li whileHover={{ y: -5 }}>
            <a href="#">
              <Linkedin />
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -5 }}>
            <a href="#">
              <Instagram />
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -5 }}>
            <a href="#">
              <Dribbble />
            </a>
          </motion.li>
        </ContainerSocialIcon>
      </ContainerSocial>
    </Container>
  )
}

export default HomeContact
