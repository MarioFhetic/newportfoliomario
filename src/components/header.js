import React, { useEffect, useState } from "react"

import { HeaderNav, Menu, Logo } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"
import { motion } from "framer-motion"

// MOON/SUN ICONS
import { MoonSvg } from "../assets/svg/moon"
import { SunSvg } from "../assets/svg/sun"

// import GlobalStateContext
// import GlobalDispatchContext => triger les changes et pouvoir changer le state
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Switch = ({ isOn, ...props }) => {
  const className = `switch ${isOn ? "on" : "off"}`

  return (
    <motion.div animate className={className} {...props}>
      <motion.div animate />
    </motion.div>
  )
}

const Header = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const [isOn, setIsOn] = useState(false)

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
          <Logo>
            <span>MF.</span>
          </Logo>
          <Menu
            onClick={toggleTheme}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor(onCursor)}
          >
            <div>{currentTheme === "dark" ? <MoonSvg /> : <SunSvg />}</div>
            {/* <span>red</span> */}
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
