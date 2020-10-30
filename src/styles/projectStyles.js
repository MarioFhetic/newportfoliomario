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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid ${props => props.theme.stateless_border_svg};
  margin: 0 auto;
  position: relative;
  transition: 0.4s;

  :hover {
    background: ${props => props.theme.background_svg};
    border: 1px solid ${props => props.theme.background_svg};

    /* background: white; */
    svg,
    polygon {
      fill: ${props => props.theme.color_svg};
      color: ${props => props.theme.color_svg};
    }
  }

  svg,
  polygon {
    fill: ${props => props.theme.stateless_color_svg};
    color: ${props => props.theme.stateless_color_svg};
    width: 50%;
  }
`

export const ContainerProject = styled.div`
  margin: 0 auto;
  width: auto;
  height: 100%;
  /* background-color: pink; */
  margin-top: 5%;
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

export const TitleProject = styled(motion.h1)`
  font-size: 8rem;
  letter-spacing: -0.1rem;
  font-family: "Roboto", sans-serif;
`

export const ContainerInfoProject = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  /* background-color: red; */
  margin-top: 8rem;

  /* background-color: pink; */
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  :nth-child(2) {
    white-space: normal;
    color: red;
    text-transform: uppercase;
    /* width: 40% !important; */
  }
`
export const ItemProject = styled.li`
  ${props =>
    props.alignEnd &&
    css`
      align-self: flex-end;
    `}

  img {
    width: 20px;
    margin-right: 0.5rem;
  }
`

export const InfoProject = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
  /* width: 16.66%; */
  padding-inline-start: 0px !important;

  flex-direction: column;
  /* padding: 0 5rem; */
  list-style: none;
  /* background-color: blue; */

  li:first-child {
    margin-bottom: 2rem;
    font-weight: 600;

    /* text-transform: uppercase; */
  }
  li:last-child {
    font-weight: 400;
  }
`

export const ContainerIntroProject = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 4rem;

  /* background-color: pink; */
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
  line-height: 200%;
  width: 50%;
  font-family: "Roboto", sans-serif;
  text-align: justify;
`

export const ContainerImage = styled(motion.div)`
  margin: 0 auto;
  margin-top: 4rem;

  width: 80%;
`
export const ContainerNextPrevProject = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-fill-color: transparent;
  -webkit--webkit-text-stroke-color: ${props => props.theme.primary_text_color};

  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 4rem;
  /* background-color: pink; */
  width: 70%;
  padding-bottom: 2rem;
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

export const SeparatorLine = styled(motion.div)`
  width: 50%;
  opacity: 0.3;
  height: 1px;
  background: ${props => props.theme.primary_text_color};
  position: relative;
  margin: auto;
  margin-top: 4rem;
`

// Scroll Progress Section

export const BigContainerWrapperScrollProgress = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: flex-end; */
  position: fixed;
  transform: translateY(-50%) translateX(-50%);
  top: 50%;
  left: 50%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  /* background: blue; */
`

export const WrapperScrollProgress = styled.div`
  width: 1px;
  height: 200px;
  /* position: fixed; */
  /* top: 50%;
  left: 5%;
  transform: translateX(-50%) translateY(-50%); */
`

export const ContainerScrollProgress = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${props => props.theme.primary_text_color};
  border-radius: 30px;
`

export const ItemScrollProgress = styled(motion.div)`
  width: inherit;
  height: inherit;
  background: ${props => props.theme.background};
  transform-origin: 0% 0%;
`

// End Scroll Progress Section

export const ContainerRightSide = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  transform: translateY(-50%) translateX(-50%);
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 100;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  /* background: brown; */
  width: 100%;
`

export const ContainerItemRightSide = styled.div`
  /* background: orange; */
  transform: rotate(90deg) translateY(-100%);
  /* width: 100%; */
  h4 {
    /* transform: rotate(90deg); */
    /* text-transform: uppercase; */
    /* letter-spacing: 0.1rem; */
  }
`

export const ContainerLeftSideAccordion = styled(motion.div)`
  width: 100%;
  position: fixed;
  display: flex;
  transform: translateY(-50%) translateX(-50%);
  top: 90%;
  left: 50%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  /* background: yellow; */
  z-index: 100;
`

export const TitleRightSide = styled(motion.h4)`
  transform: translateY(100%);
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  width: 100px;
  font-weight: 400;
`

// ACCORDION SECTION

// export const AccordionHeader = styled(motion.div)`
//   width: 100%;
//   /* height: 32px; */
//   /* background: red; */
//   position: absolute;
//   /* display: flex; */
//   /* align-items: center; */
//   color: blue;
//   height: 100%;
//   width: 100%;
// `
export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  height: 100%;
  width: 0%;

  /* background: red; */

  a {
    cursor: pointer;
    width: 100%;
    margin: 0px 8px;
    font-size: 1rem;
    color: ${props => props.theme.background_svg};

    /* display: block; */
    font-weight: 300;
    /* transition: 0.1 ease-in-out; */
  }
`

export const AccordionIcon = styled(motion.div)`
  height: 100%;
  /* width: 0px; */
  position: relative;
  top: 15%;
  /* margin-right: 10px; */
  display: flex;
  /* align-items: center; */
  /* transform: translateY(50%); */
  /* justify-content: center; */
  flex-direction: column;
  /* transform: rotate(-90deg); */
  /* background: brown; */
  cursor: pointer;
  span {
    /* position: absolute; */
    width: 16px;
    height: 4px;
    background: ${props => props.theme.background_svg};
    /* transition: 0.1 ease-in-out; */
  }
`

// END ACCORDION SECTION
