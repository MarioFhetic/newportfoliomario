import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled.div`
  height: 0;
  width: 100%;
  position: absolute;
  position: fixed;

  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: red;
  @media (max-width: 540px) {
    top: 2rem;
  }
`

export const Menu = styled.div`
  /* background-color: red; */
  width: 25px;
  cursor: pointer;
`

export const Logo = styled(motion.div)`
  mix-blend-mode: difference;
  font-family: Montserrat sans-serif;
  span {
    mix-blend-mode: difference;
    color: ${props => props.theme.header_color};
  }
`
