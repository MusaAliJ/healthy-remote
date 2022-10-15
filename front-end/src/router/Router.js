import React from "react"
import { Routes, Route } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { routes } from "./route-contant"

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return route.auth_required ? (
          <Route
            path={route.route}
            element={<PrivateRoute component={route.component} />}
            key={route.key}
          />
        ) : (
          <Route path={route.route} element={route.component} key={route.key} />
        )
      })}
    </Routes>
  )
}

export default Router
