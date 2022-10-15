import React, { useEffect, useState } from "react"
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as yup from "yup"
import { makeStyles } from "@material-ui/core/styles"
import { Button, CircularProgress, Typography } from "@material-ui/core"
import { Visibility, VisibilityOff, Person } from "@material-ui/icons"
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel
} from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: "22px"
  },
  button: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`
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
  para: {
    marginTop: "20px"
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

const Register = () => {
  //   const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false)
  const [confirmShowPassword, setConfirmShowPassword] = useState(false)
  //   const userLogin = useSelector((state: any) => state.userLogin);
  //   const { userInfo } = userLogin;

  //   const userRegister = useSelector((state: any) => state.userRegister);
  //   const { error, loading } = userRegister;

  //   const router = useHistory()
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  const handleConfirmShowPassword = () => {
    setConfirmShowPassword((prev) => !prev)
  }
  const classes = useStyles()
  //   useEffect(() => {
  //     if (userInfo && userInfo?.email) {
  //       router.push("/orders-history");
  //     }
  //   }, [userInfo]);
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          email: "",

          password: "",
          confirmPassword: ""
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            console.log(values)
            // await dispatch(userRegisterAction(data));
            // resetForm({ values: "" });
          } catch (error) {
            console.log(error)
          }
        }}
        validationSchema={yup.object({
          firstName: yup.string().max(255).required("First Name is required"),
          email: yup
            .string()
            .email("Must be a valid email")
            .required("Email is required"),
          password: yup.string().max(255).required("Password is required"),
          confirmPassword: yup
            .string()
            .max(255)
            .oneOf([yup.ref("password"), null], "Confirm Password must match")
            .required("Confirm Password is required")
        })}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <InputLabel className={classes.label} htmlFor="firstName">
                <span>First Name</span>
              </InputLabel>
              <Field
                as={OutlinedInput}
                className={classes.input}
                id="firstName"
                name="firstName"
                placeholder="Enter Your First Name"
                value={formik.values.firstName}
                type="text"
                label="firstName"
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Person />
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
              />
              <ErrorMessage
                name="firstName"
                render={(msg) => {
                  return (
                    <span style={{ color: "red", display: "block" }}>
                      {msg}
                    </span>
                  )
                }}
              />

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
                    <IconButton>
                      <Person />
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
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
                      onMouseDown={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
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
              <InputLabel className={classes.label} htmlFor="confirmPassword">
                <span>Confirm Password</span>
              </InputLabel>
              <Field
                as={OutlinedInput}
                className={classes.input}
                id="confirmPassword"
                placeholder="Enter Your Confirm Password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                type={confirmShowPassword ? "text" : "password"}
                label="confirmPassword"
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={()=>console.log("onClick")}
                      onMouseDown={handleConfirmShowPassword}
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
                name="confirmPassword"
                render={(msg) => {
                  return (
                    <span style={{ color: "red", display: "block" }}>
                      {msg}
                    </span>
                  )
                }}
              />
              {/* <div style={{ color: "red", display: "block" }}>
                {error && error}
              </div> */}
              <div className={classes.footer}>
                <Typography paragraph className={classes.para}>
                  Already have an account ?{" "}
                  <Link to="/login" className={classes.link}>
                    Login
                  </Link>
                </Typography>
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
                    {/* {loading ? <CircularProgress /> : "SignUp"} */}
                    SignUp
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

export default Register
