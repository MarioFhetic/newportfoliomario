import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components" //Theme Provider pour nos différents thèmes
import { normalize } from "styled-normalize"

// Components

import Header from "./header"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// Cursor
import Cursor from "../components/customCursor"

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  /* cursor: none; */
}

::-moz-selection { /* Code for Firefox */
  background: ${props => props.theme.background};
}

::selection {
  background: ${props => props.theme.background};
}

.no-scroll
{
  overflow-y: hidden; 
}

a
{
  color: ${props => props.theme.primary_text_color};
}
p
{
  margin-block-start: 0em !important;
  margin-block-end: 0em !important;
}

div :focus
{
  outline: none;
}
html {
  box-sizing: border-box; 
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  
  
}
body {
  font-size: 100%;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
  color: ${props => props.theme.primary_text_color};
 }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // THEMES

  // Color : #f2efe8

  const darkTheme = {
    background: "#121212",
    primary_text_color: "#F9F9F9",
    opposite_primary_text_color: "#121212",
    primary_mouse_color: "#F9F9F9",
    hovered_mouse_color: "#7e57c2",
    linear_gradient_title:
      "linear-gradient(90deg, #F9F9F9 26.78%, #D5D5D5 100%);",
    color_svg: "#F9F9F9",
    first_panel_color: "#121212",
    background_svg: "#fff",
    color_svg: "black",
    stateless_border_svg: "white",
    stateless_color_svg: "white",
  }
  const lightTheme = {
    background: "#f2efe8",
    primary_text_color: "#121212",
    opposite_primary_text_color: "#F9F9F9",

    primary_mouse_color: "#121212",
    hovered_mouse_color: "#FF5E4D",
    linear_gradient_title:
      "linear-gradient(90deg, #121212 23.96%, #545454 100%);",
    color_svg: "#121212",
    first_panel_color: "#f2efe8",
    background_svg: "black",
    color_svg: "#fff",
    stateless_border_svg: "#30302f",
    stateless_color_svg:
      "#linear-gradient(90deg, #121212 23.96%, #545454 100%)",
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  // on va tchecker si CursorStyles est égal au CursorType et si il ne l'est pas on le met à false
  // le cursorType passé en argument ici represente soit hovered soit pointer
  const onCursor = cursorType => {
    // includes permet de savoir si un string existe à l'intérieur d'un tableau
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false // si il existe pas on met cursorType à false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType }) // ici on peut même remplacer le dernier cursorType par 'hovered' ou "pointer"
    // avec le dispatch on update le cursorType avec ce que le cursorType (passe en event à notre fonction) est actuellement
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header onCursor={onCursor} />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
