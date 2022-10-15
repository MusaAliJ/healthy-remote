import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import { ThemeMaker } from "./styles/ThemeMaker"
import UserContainer from "./context/user/UserContainer"
import "./App.css"
import Drawer from "./Drawer"

function App() {
  return (
    <BrowserRouter>
      <ThemeMaker>
        <UserContainer>
          <Router />
        </UserContainer>
        <Drawer />
        <Router />
      </ThemeMaker>
    </BrowserRouter>
  )
}

export default App
