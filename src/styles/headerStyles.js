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
  /* height: 100%; */
  .switch {
    top: 9%;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    padding: 10px;
    display: flex;
    cursor: pointer;
    transition: 0.3s;
  }
  .switch.on {
    background-color: #22cc88;
    justify-content: flex-end;
  }

  .switch.off {
    background-color: #dddddd;
    justify-content: flex-start;
  }

  .switch div {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 200px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
  }
`

export const Logo = styled.div`
  mix-blend-mode: difference;
`
