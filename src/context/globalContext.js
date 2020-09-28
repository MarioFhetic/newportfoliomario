import React, { createContext, useReducer, useContext } from "react"

// Define context
const GlobalStateContext = createContext()
// Global dispatch pour triger les changes sur le state
const GlobalDispatchContext = createContext()

// Reducer - semblable à useState mais pour les situations complexes avec pleins de valeurs
const globalReducer = (state, action) => {
  switch (action.type) {
    // TOGGLE_THEME => le type actuel que l'on change
    case "TOGGLE_THEME": {
      return {
        ...state, // return le previous state
        currentTheme: action.theme,
      }
    }
    case "CURSOR_TYPE": {
      return {
        ...state, // return le previous state
        cursorType: action.cursorType,
      }
    }
    default: {
      throw new Error(`current theme pas définie ${action.type}`)
    }
  }
}

// Provider => wrap notre gatsby à travers le provider pour pouvoir y accèder à travers tout notre site

// La on exporte tout ce qu'on a fait en haut, on wrap tout pour pouvoir y accéder de partout
export const GlobalProvider = (
  { children } // children est tout notre site
) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("theme") == null
        ? "light"
        : window.localStorage.getItem("theme"),
    // On créer un initial state (ou type) pour la sourie
    // Puis on va créer un tableau rempli de classe css que l'on choisira en fonction du cursorType
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "workHovered"],
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// Custom hook pour use dispatch et state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
