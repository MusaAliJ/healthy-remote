import Login from "../auth/login/Login"
import Register from "../auth/register/Register"

export const routes = [
  {
    key: "login",
    title: "Login",
    route: "/login",
    auth_required: false,
    component: <Login />
  },
  {
    key: "register",
    title: "Register",
    route: "/register",
    auth_required: false,
    component: <Register />
  }
]
