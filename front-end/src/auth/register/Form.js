import React, { useContext, useEffect, useState } from "react"
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as yup from "yup"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  CircularProgress,
  MenuItem,
  Typography
} from "@material-ui/core"
import { Visibility, VisibilityOff, Person } from "@material-ui/icons"
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  Select
} from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../../context/user/UserContext"
import { config, localHost, Roles } from "../../constant/constant"
import axios from "axios"

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
  const classes = useStyles()
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [confirmShowPassword, setConfirmShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  const handleConfirmShowPassword = () => {
    setConfirmShowPassword((prev) => !prev)
  }
  useEffect(() => {
    if (userContext.isAuthenticated()) {
      navigate("/dashboard")
    }
  }, [userContext.user])

  return (
    <div>
      <Formik
        initialValues={{
          Name: "salman",
          email: "salman@gmail.com",
          role: "",
          businessName: "bus",
          password: "123",
          confirmPassword: "123"
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            setLoading(true)
            console.log(values)
            let apiData = {
              name: values.Name,
              businessName: values.businessName,
              email: values.email,
              password: values.password,
              userRole: values.role
            }
            const { data } = await axios.post(
              `${localHost}/signup`,
              { apiData },
              config
            )
            console.log(data)
            userContext.updatedUser(data)
            resetForm({ values: "" })
            setLoading(false)
            setError("")
          } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
          }
        }}
        validationSchema={yup.object({
          Name: yup.string().max(255).required("First Name is required"),
          role: yup.string().max(255).required("Role is required"),
          businessName: yup.string().optional(),
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
              <InputLabel className={classes.label} htmlFor="Name">
                <span>Name</span>
              </InputLabel>
              <Field
                as={OutlinedInput}
                className={classes.input}
                id="Name"
                name="Name"
                placeholder="Enter Your Name"
                value={formik.values.Name}
                type="text"
                label="Name"
                onChange={formik.handleChange}
                aria-describedby="standard-weight-helper-text"
              />
              <ErrorMessage
                name="Name"
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

              <InputLabel className={classes.label} htmlFor="role">
                <span>Role</span>
              </InputLabel>
              <Field
                as={Select}
                className={classes.input}
                variant="outlined"
                id="role"
                name="role"
                value={formik.values.role}
                label="Role"
                type="select"
                onChange={formik.handleChange}
                aria-describedby="standard-weight-helper-text"
              >
                {Roles.map((role) => {
                  return (
                    <MenuItem key={role.value} value={role.value}>
                      {role.name}
                    </MenuItem>
                  )
                })}
              </Field>
              <ErrorMessage
                name="role"
                render={(msg) => {
                  return (
                    <span style={{ color: "red", display: "block" }}>
                      {msg}
                    </span>
                  )
                }}
              />

              <InputLabel className={classes.label} htmlFor="businessName">
                <span>Business Name</span>
              </InputLabel>
              <Field
                as={OutlinedInput}
                className={classes.input}
                id="businessName"
                name="businessName"
                placeholder="Enter Your Business Name"
                value={formik.values.businessName}
                type="text"
                label="businessName"
                onChange={formik.handleChange}
                aria-describedby="standard-weight-helper-text"
              />
              <ErrorMessage
                name="businessName"
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
                      onMouseDown={handleConfirmShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
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
              <div style={{ color: "red", display: "block" }}>
                {error && error}
              </div>
              <div className={classes.footer}>
                <Typography paragraph className={classes.para}>
                  Already have an account ?{" "}
                  <Link to="/login" className={classes.link}>
                    Login
                  </Link>
                </Typography>
                <div className={classes.buttonDiv}>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      classes={{
                        root: classes.button,
                        label: classes.buttonLabel
                      }}
                      color="primary"
                      variant="contained"
                      fullWidth
                      type={"submit"}
                    >
                      Register
                    </Button>
                  )}
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
