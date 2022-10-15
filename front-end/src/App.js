import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import { ThemeMaker } from "./styles/ThemeMaker"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <ThemeMaker>
        <Router />
      </ThemeMaker>
    </BrowserRouter>
  )
}

export default App
