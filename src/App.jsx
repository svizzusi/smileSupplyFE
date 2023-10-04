import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'
import NavBar from './layout/NavBar/NavBar'
import Home from "./views/Home"
import Dashboard from "./views/Dashboard"
import Footer from "./layout/footer/Footer"
import ExistingProductsPage from "./views/ExistingProductsPage"
import OrderFormPage from "./views/OrderFormPage"
import SmallScreensPopup from "./components/home/SmallScreensPopup"

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [productId, setProductId] = useState()
   
  // State to track the screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Update the screen width when the window is resized
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
      <NavBar setShowLogin={setShowLogin} setShowSignup={setShowSignup} signedIn={signedIn}/>
      {screenWidth <= 480 && <SmallScreensPopup />}
      <Routes>
        <Route
          path={'/'}
          element={<Home showLogin={showLogin} setShowLogin={setShowLogin} showSignup={showSignup} setShowSignup={setShowSignup} setSignedIn={setSignedIn}/>}
        ></Route>
        <Route
          path={'/dashboard'}
          element={<Dashboard setSignedIn={setSignedIn} productId={productId} setProductId={setProductId}/>}
        ></Route>
        <Route
          path={'/existing-products'}
          element={<ExistingProductsPage productId={productId} setProductId={setProductId}/>}
        ></Route>
        <Route
          path={'/order-form'}
          element={<OrderFormPage productId={productId} setProductId={setProductId}/>}
        ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
