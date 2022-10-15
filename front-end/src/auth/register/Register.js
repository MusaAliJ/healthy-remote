import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import Register from "./Form"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    width: "100vw",
    alignContent: "center",
    marginTop: "50px",
    marginBottom: "50px"
  },
  formContainer: {
    width: "46%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    },
    padding: "22px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    margin: "0 auto",
    height: "fit-content"
  },
  heading: {
    padding: "22px 10px",
    // color:'black',
    fontSize: "1.26rem",
    fontWeight: "bold"
  },
  logoBox: {
    width: "50%",
    margin: "0px auto"
  }
}))

const SignUp = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <Typography variant="body2" component="h3" className={classes.heading}>
          User Sign up
        </Typography>
        <Register />
      </div>
    </div>
  )
}

export default SignUp
