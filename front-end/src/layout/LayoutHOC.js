import { Grid, withStyles } from "@material-ui/core"
import React from "react"
import Drawer, { DrawerWidth } from "../Drawer"

const styles = (theme) => ({
  container: {
    backgroundColor: theme.custom.bgGrey,
    padding: "12px 12px 0 12px",
    minHeight: "100vh",
    width: `calc(100vw - (${DrawerWidth}px + 32px))`
  },
  root: {
    display: "flex"
  }
})

const LayoutHOC = ({ classes, children }) => {
  return (
    <Grid container direction="row-reverse" className={classes.root}>
      <Drawer />
      <Grid className={classes.container}>{children}</Grid>
    </Grid>
  )
}

export default withStyles(styles)(LayoutHOC)
