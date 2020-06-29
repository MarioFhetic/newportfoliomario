// Ce fichier permet de wrap your site in additional components

import React from "react"
import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
