import React, { useEffect, useState } from "react"
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as yup from "yup"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { Button, CircularProgress, Typography } from "@material-ui/core"
import { Visibility, VisibilityOff, Person } from "@material-ui/icons"
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel
} from "@material-ui/core"
import { useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: "22px"
  },
  button: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main
    },
    width: "fit-content"
  },
  buttonDiv: {
    width: "fit-content",
    marginLeft: "auto",
    marginTop: "5px"
  },
  input: {
    width: "100%",
    marginBottom: "12px"
  },
  label: {
    position: "relative",
    top: "8px",
    left: "17px",
    background: "white",
    width: "fit-content",
    zIndex: 200
  },

  link: {
    color: theme.palette.primary.main,
    textDecoration: "none"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px"
  }
}))

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  //   const router = useHistory()

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  const classes = useStyles()
  //   useEffect(() => {
  //     if (userInfo && userInfo?.email) {
  //       router.push("/dashboard")
  //     }
  //   }, [userInfo])
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            console.log({ values })
            // await dispatch(userLoginAction(values.email, values.password))
            // resetForm({ values: "" })
          } catch (error) {
            console.log(error)
          }
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("Must be a valid email")
            .required("Email is required"),
          password: yup.string().max(255).required("Password is required")
        })}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <InputLabel className={classes.label} htmlFor="email">
                <span>Email</span>
              </InputLabel>
              <Field
                as={OutlinedInput}
                className={classes.input}
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formik.values.email}
                type="email"
                label="email"
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                    // aria-label="toggle password visibility"
                    // onClick={()=>console.log("onClick")}
                    // onMouseDown={handleShowPassword}
                    >
                      <Person />
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
                // inputProps={{
                // 'aria-label': 'weight',
                // }}
              />
              <ErrorMessage
                name="email"
                render={(msg) => {
                  return (
                    <span style={{ color: "red", display: "block" }}>
                      {msg}
                    </span>
                  )
                }}
              />
              <InputLabel className={classes.label} htmlFor="password">
                <span>Password</span>
              </InputLabel>
              <Field
                as={OutlinedInput}
                className={classes.input}
                id="password"
                placeholder="Enter Your Password"
                name="password"
                value={formik.values.password}
                type={showPassword ? "text" : "password"}
                label="password"
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={()=>console.log("onClick")}
                      onMouseDown={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
                // inputProps={{
                // 'aria-label': 'weight',
                // }}
              />
              <ErrorMessage
                name="password"
                render={(msg) => {
                  return (
                    <span style={{ color: "red", display: "block" }}>
                      {msg}
                    </span>
                  )
                }}
              />

              <div className={classes.footer}>
                <div>
                  <Typography paragraph className={classes.para}>
                    Don't have an account ?{" "}
                    <Link to="/register" className={classes.link}>
                      Signup
                    </Link>
                  </Typography>
                </div>

                <div className={classes.buttonDiv}>
                  <Button
                    classes={{
                      root: classes.button,
                      label: classes.buttonLabel
                    }}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type={"submit"}

                    // type={loading ? "button" : "submit"}
                  >
                    Signin
                    {/* {loading ? <CircularProgress /> : "Signin"} */}
                  </Button>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default LoginForm
