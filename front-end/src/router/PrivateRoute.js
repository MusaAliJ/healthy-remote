import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LayoutHOC from "../layout/LayoutHOC"

export const PrivateRoute = ({ component: RouteComponent }) => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!userContext.isAuthenticated()) {
  //     userContext.removeUser()
  //     navigate(RouteHelper.getRoute(RouteKeys.Login))
  //   }
  // }, [userContext.user, navigate])
  return <LayoutHOC children={RouteComponent} />
}
