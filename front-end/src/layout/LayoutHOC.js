import React from "react"
import Drawer from "../Drawer"

const LayoutHOC = ({ children }) => {
  return (
    <div>
      <Drawer />
      {children}
    </div>
  )
}

export default LayoutHOC
