import React from "react"
import { ThemeProvider } from "@material-ui/core"
import { createMaterialTheme } from "./theme"

export function ThemeMaker({ children }) {
  return <ThemeProvider theme={createMaterialTheme()}>{children}</ThemeProvider>
}
