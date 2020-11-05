/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Ce fichier permet de wrap your site in additional components

import React from "react"
// import { GlobalProvider } from "./src/context/globalContext"
// import { ApolloProvider } from "@apollo/client"
// import client from "./src/utils/apolloClient"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider></GlobalProvider>
}

// You can delete this file if you're not using it
