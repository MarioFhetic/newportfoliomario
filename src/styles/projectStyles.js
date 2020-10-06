import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const AppContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const ScrollContainer = styled.div`
  transform: translate3d(0px, 0px, 0px) skewY(0deg);
`

export const ReturnButton = styled.div`
  margin: 0 auto;

  width: auto;
  height: 100%;
  background-color: pink;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
`

export const ContainerProject = styled.div`
  margin: 0 auto;
  width: auto;
  height: 100%;
  background-color: pink;
  margin-top: 10%;
  text-align: center;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
      background-color: blue;
    `}
`

export const TitleProject = styled.h1`
  font-size: 6rem;
  font-family: "Roboto", sans-serif;
`

export const ContainerInfoProject = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;

  background-color: pink;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
`
export const ItemProject = styled.li`
  ${props =>
    props.alignEnd &&
    css`
      align-self: flex-end;
    `}
`

export const InfoProject = styled.ul`
  display: flex;
  position: relative;
  width: 16.66%;
  padding-inline-start: 0px !important;

  flex-direction: column;
  /* padding: 0 5rem; */
  list-style: none;
  background-color: blue;

  li:first-child {
    color: red;
    margin-bottom: 2rem;
  }
`

export const ContainerIntroProject = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 4rem;

  background-color: pink;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
`

export const IntroProject = styled.p`
  font-size: 1rem;
  width: 50%;
  font-family: "Roboto", sans-serif;
`

export const ContainerImage = styled(motion.div)`
  margin: 0 auto;
  margin-top: 4rem;

  width: 70%;
`
export const ContainerNextPrevProject = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  background-color: pink;
  width: 70%;
`

export const HomePanelBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1001;
  background: ${props => props.theme.background};
`

export const RightPanelBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 11;
  right: 0;
  /* background: ${props => props.theme.second_panel_color}; */
  background: pink;
`
