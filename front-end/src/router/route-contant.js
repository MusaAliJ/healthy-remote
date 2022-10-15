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
  },
  {
    key: "dashboard",
    title: "Dashboard",
    route: "/dashboard",
    auth_required: true,
    component: <h1>Dashboard</h1>
  },
  {
    key: "companies",
    title: "Companies",
    route: "/companies",
    auth_required: true,
    component: <h1>Companies</h1>
  },
  {
    key: "employees",
    title: "Employees",
    route: "/employees",
    auth_required: true,
    component: <h1>Employees</h1>
  },
  {
    key: "family-members",
    title: "Family Members",
    route: "/family-members",
    auth_required: true,
    component: <h1>FamilyMembers</h1>
  }
]
