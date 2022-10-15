import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/user/UserContext"
import LayoutHOC from "../layout/LayoutHOC"

export const PrivateRoute = ({ component: RouteComponent }) => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userContext.isAuthenticated()) {
      userContext.removeUser()
    }
  }, [userContext.user, navigate])
  return <LayoutHOC children={RouteComponent} />
}
