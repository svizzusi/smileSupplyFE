import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import NavBar from './layout/NavBar/NavBar'
import Home from "./views/Home"
import Dashboard from "./views/Dashboard"
import Footer from "./layout/footer/Footer"
import ExistingProducts from "./views/ExistingProducts"

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

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
        <Route
          path={'/existing-projects'}
          element={<ExistingProducts />}
        ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
