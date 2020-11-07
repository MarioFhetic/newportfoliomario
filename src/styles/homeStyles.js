import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Header = styled.div`
  /* background: ${props => props.theme.background}; */
  background: #121212;
  height: 100vh;
  width: 100%;
  position: relative;
  /* margin-bottom: 296px; */
`

export const WebglContainer = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: 1025px) {
    height: 85%;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 80%;
  display: block;
`

export const HeaderTitle = styled.h1`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${props => props.theme.primary_text_color};
`

export const HeaderLine = styled.span`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;
`

export const ContainerTitleWebGL = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 10%;
  top: 40%;
`

export const TitleWebGL = styled.h1`
  color: red;
`

// ABOUT SECTION

export const TitleAbout = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  background: ${props => props.theme.linear_gradient_title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  // Max width of Mobile device
  @media (max-width: 540px) {
    font-size: 2.2rem;
  }
  /* @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  } */
`
export const SvgContent = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  /* background-color: red; */
  svg {
    width: 250px;
    height: 250px;
    rect {
      fill: ${props => props.theme.color_svg};
    }
    polygon {
      fill: ${props => props.theme.color_svg};
    }
    path {
      fill: ${props => props.theme.color_svg};
    }
    circle {
      fill: ${props => props.theme.color_svg};
    }
    ellipse {
      fill: ${props => props.theme.color_svg};
    }
  }
`
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  text-align: left;
  p {
    line-height: 150%;
  }
`

export const ContainerTextAbout = styled(motion.div)`
  display: flex;
  justify-content: center;
  /* margin-bottom: 10rem; */
`
export const TextAbout = styled(motion.p)`
  font-size: 2.5rem;
  line-height: 200%;
  font-weight: 300;
  // Max width of Mobile device
  @media (max-width: 540px) {
    font-size: 1rem;
  }
`

export const UnderlineWord = styled.span`
  position: relative;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    display: block;
    right: 0;
    background: ${props => props.theme.primary_text_color};

    transition: 0.4s;
  }
  &:hover {
    &:after {
      width: 0%;
      left: 0;
      background: ${props => props.theme.primary_text_color};
    }
  }
`

// WORK SECTION

export const ContainerHeaderWorks = styled(motion.div)`
  width: 100%;
  /* background: ${props => props.theme.background}; */
`

export const HeaderWorks = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  background: ${props => props.theme.linear_gradient_title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  // Max width of Mobile device
  @media (max-width: 540px) {
    font-size: 2.2rem;
  }
  /* @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  } */
`

export const ProjectsList = styled.div`
  /* background-color: pink; */
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  
  ul {
    padding: 0;

    li {
      position: relative;
      list-style: none;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 900;
      margin-bottom: 4rem;

      

      .link
      {
        width: 100%;
      }
      a
      {

        &:hover
        {
          /* ${props => props.theme.primary_text_color}; */
          -webkit-text-fill-color: ${props => props.theme.background};; 
          -webkit-text-stroke-width: 1px;
          -webkit--webkit-text-stroke-color: ${props =>
            props.theme.primary_text_color};;

        }
      }
      :last-child
    {
      margin-bottom: 0rem !important;
    }

      // Max width of Mobile device
      @media (max-width: 540px) {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      /* @media (min-width: 1216px) {
        max-width: 1152px;
      }
      @media (min-width: 1408px) {
        max-width: 1244px;
      } */
    }
  }
  span {
    width: 150%;
    position: absolute;
    height: 100%;
    left: 0;
    font-size: 0.9rem;
    text-transform: initial !important;
  }
`

export const NavVideos = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  left: 25%;
  z-index: -3;
  height: 100%;
  width: 75%;
  /* background-color: blue; */
  .reveal {
    position: absolute;
    width: 100%;
    background: ${props => props.theme.background};
    top: 0;
    bottom: 0;
    left: 0;
    /* z-index: 10; */
    /* background-color: green; */
  }
  .video {
    /* background: yellow; */
    position: absolute;
    height: 100%;

    margin: 0;
    z-index: -1;
    video {
      height: 100%;
      width: 100%;
    }
  }
`

// CONTACT SECTION

export const ContainerSocial = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;

  span {
    font-size: 0.8rem;
    @media (max-width: 540px) {
      font-size: 0.5rem;
    }
  }
`

export const ContainerSocialIcon = styled(motion.ul)`
  display: flex;
  list-style: none;
  /* margin-bottom: 2rem; */
  li {
    padding-left: 1rem;
  }
  svg {
    width: 20px;
    height: 20px;
    path {
      color: ${props => props.theme.primary_text_color};
      fill: ${props => props.theme.primary_text_color};
    }
  }
`
