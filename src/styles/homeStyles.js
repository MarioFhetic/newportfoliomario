import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Header = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  /* margin-bottom: 296px; */
`

export const WebglContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
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

// ABOUT SECTION

export const TitleAbout = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  background: ${props => props.theme.linear_gradient_title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
`
export const TextAbout = styled.p`
  font-size: 2.5rem;
  line-height: 200%;
  font-weight: 300;
`

export const UnderlineWord = styled.span`
  position: relative;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
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
  overflow: hidden;
`

export const ProjectsList = styled.div`
  /* background-color: pink; */
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
      /* height: 96px;
      line-height: 96px; */
      /* overflow: hidden; */
      /* padding-bottom: 1.2rem; */
      /* .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      } */
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
  left: 35%;
  z-index: -3;
  /* height: 100%; */
  height: 75%;
  /* width: 100%; */
  width: 70%;
  /* background: red; */
  .reveal {
    position: absolute;
    width: 100%;
    background: ${props => props.theme.background};
    top: 0;
    bottom: 0;
    left: 0;
    /* z-index: 10; */
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
