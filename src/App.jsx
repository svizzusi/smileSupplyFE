import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import NavBar from './layout/NavBar/NavBar'
import Home from "./views/Home"
import Dashboard from "./views/Dashboard"
import Footer from "./layout/footer/Footer"

function App() {
  const [showLogin, setShowLogin] = useState(true)
  const [showSignup, setShowSignup] = useState(true)

  return (
    <>
      <NavBar setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
      <Routes>
        <Route
          path={'/'}
          element={<Home showLogin={showLogin} setShowLogin={setShowLogin} showSignup={showSignup} setShowSignup={setShowSignup}/>}
        ></Route>
        <Route
          path={'/dashboard'}
          element={<Dashboard />}
        ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
