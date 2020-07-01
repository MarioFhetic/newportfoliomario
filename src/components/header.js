import React, { useEffect } from "react"

import { HeaderNav, Menu, Logo } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

// import GlobalStateContext
// import GlobalDispatchContext => triger les changes et pouvoir changer le state
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Header = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  // custom function toggle Theme
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onClick={toggleTheme}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor(onCursor)}
          >
            Fayolle Mario
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
