import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/Login"
import { Routes, Route } from "react-router-dom"

 
function App() {


  return (
    < Routes>
    <Route path= "/" element ={<LoginPage/>} />
    <Route path= "/dashboard" element ={<Dashboard/>} />
    </ Routes >
  )
}

export default App
