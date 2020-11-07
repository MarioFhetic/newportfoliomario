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
          © 2020 Tous droits réservés | Design - Développement - Mario Fayolle
        </span>
        <ContainerSocialIcon>
          <motion.li whileHover={{ y: -5 }}>
            <a href="https://www.linkedin.com/in/mario-fayolle/">
              <Linkedin />
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -5 }}>
            <a href="https://www.instagram.com/mariofyl/">
              <Instagram />
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -5 }}>
            <a href="https://dribbble.com/mariofayolle">
              <Dribbble />
            </a>
          </motion.li>
        </ContainerSocialIcon>
      </ContainerSocial>
    </Container>
  )
}

export default HomeContact
