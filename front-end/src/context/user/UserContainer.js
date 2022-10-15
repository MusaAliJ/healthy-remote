import React, { useState, useEffect } from "react"
import { UserProvider } from "./UserContext"
import {
  keys,
  getFromStorage,
  removeFromStorage,
  addToStorage
} from "../../utils/localStorage"
import { useNavigate } from "react-router-dom"
import jwt from "jwt-decode"

function UserContainer({ children }) {
  const [user, setUser] = useState(getFromStorage(keys.USER))
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated()) removeUser()
    // eslint-disable-next-line
  }, [user])

  async function updatedUser(updatedUser) {
    if (updatedUser) {
      await addToStorage(keys.USER, updatedUser)
      setUser(updatedUser)
    }
  }

  function isAuthenticated() {
    const user = getFromStorage(keys.USER)
    const token = user ? user.token : ""
    if (token) {
      const { exp } = jwt(token)
      return !(Date.now() >= exp * 1000)
    }
    return false
  }

  function removeUser() {
    removeFromStorage(keys.USER)
    setUser(null)
    navigate("/login")
  }

  async function logout() {
    removeUser()
  }

  function getUserRole() {
    return "Emp"
  }

  return (
    <UserProvider
      value={{
        user,
        logout,
        isAuthenticated,
        getUserRole,
        updatedUser,
        removeUser
      }}
    >
      {children}
    </UserProvider>
  )
}

export default UserContainer
