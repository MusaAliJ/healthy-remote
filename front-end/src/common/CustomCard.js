import { Card, withStyles } from "@material-ui/core"
import React from "react"

const styles = () => ({
  box: {
    padding: 20,
    borderRadius: 10,
    margin: 8
  },
  fullWidth: {
    width: "97%"
  }
})

function CustomCard({ classes, children, customCardClass, fullWidth = false }) {
  return (
    <Card
      elevation={0}
      className={`${classes.box} ${fullWidth ? classes.fullWidth : ""} ${
        customCardClass || ""
      }`}
    >
      {children}
    </Card>
  )
}

export default withStyles(styles)(CustomCard)
