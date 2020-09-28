import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  /* padding: 0 32px; */
  position: relative;
  width: auto;
  height: 100%;
  margin-bottom: 100px;
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

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
      background-color: blue;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};

  ${props =>
    props.alignItemsCenter &&
    css`
      align-items: center;
    `};

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};

  ${props =>
    props.flexCenter &&
    css`
      justify-content: center;
    `};

  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
`

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.primary_mouse_color};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  mix-blend-mode: difference;

  &.pointer {
    border: 4px solid ${props => props.theme.primary_mouse_color} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.primary_mouse_color} !important;
    border: 4px solid ${props => props.theme.primary_mouse_color} !important;
  }
  &.workHovered {
    background: transparent !important;
    width: 112px;
    height: 112px;
    border: 4px solid ${props => props.theme.primary_mouse_color} !important;
    border: 4px solid ${props => props.theme.primary_mouse_color} !important;
  }
`
