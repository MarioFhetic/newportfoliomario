import styled, { css } from "styled-components"

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
`

export const Menu = styled.div`
  background-color: red;
  width: 25px;
`

export const Logo = styled.div`
  mix-blend-mode: difference;
  font-family: Montserrat sans-serif;
  span {
    mix-blend-mode: difference;
  }
`
