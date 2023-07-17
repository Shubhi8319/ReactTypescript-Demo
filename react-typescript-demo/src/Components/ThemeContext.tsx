import { Theme } from "./Theme";
import React, { createContext } from "react";

const ThemeContext = createContext(Theme)

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContextProvider = ({children} : ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
}