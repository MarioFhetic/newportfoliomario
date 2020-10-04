import React, { useEffect, useRef } from "react"

// components
import WebGL from "../webGL/webGL"

// custom hooks
import useWindowSize from "../../hooks/useWindowSize"

// context
import { useGlobalStateContext } from "../../context/globalContext"

import {
  Header,
  WebglContainer,
  Canvas,
  HeaderTitle,
  HeaderLine,
} from "../../styles/homeStyles"

const HomeHeader = ({ onCursor }) => {
  let canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    // variable necessaire pour render notre canvas
    let renderingElement = canvas.current

    // on clone notre canvas pour pouvoir dessignez dessus - c'est la black box qu'on va effacer
    let drawingElement = renderingElement.cloneNode()

    // on grab/catch le context de notre rendering et drawing element
    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    // la dernière position du curseur en x et en y
    let lastX
    let lastY

    // le curseur est en train de bouger ou pas
    let moving = false

    // Pour render la blackbox :
    renderingCtx.globalCompositeOperation = "source-over" // default setting pour dessiner sur un canvas
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#fffbf6"
    renderingCtx.fillRect(0, 0, size.width, size.height) // grâce à notre hooks

    // Effacer le rectangle

    // L'idée ici c'est : quand on est au hover sur le canvas moving est = true
    // ce qui exécute le addEventListener de mousemove (à la fin)
    // et quand la mouse et up (mouseup) moving est false ce qui désactive
    // l'effet de mousemove et qui arrête le dessin
    renderingElement.addEventListener("mouseover", ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("click", ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", ev => {
      moving = false
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", ev => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = ev.pageX - renderingElement.offsetLeft
        let currentY = ev.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])
  // On ajoute currentTheme à la dépendence de useEffect pour pouvoir changer la couleur du
  // canvas en fonction du thème

  return (
    <Header>
      <WebglContainer>
        <WebGL></WebGL>
      </WebglContainer>
      <Canvas ref={canvas} height={size.height} width={size.width} />
      {/* <HeaderTitle>
        <HeaderLine>DIG</HeaderLine>
        <HeaderLine>DEEP</HeaderLine>
      </HeaderTitle> */}
    </Header>
  )
}

export default HomeHeader
