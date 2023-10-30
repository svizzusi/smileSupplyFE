import { Route, Routes, Navigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import NavBar from './layout/NavBar/NavBar'
import Home from "./views/Home"
import Dashboard from "./views/Dashboard"
import Footer from "./layout/footer/Footer"
import ExistingProductsPage from "./views/ExistingProductsPage"
import OrderFormPage from "./views/OrderFormPage"
// import SmallScreensPopup from "./components/home/SmallScreensPopup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Tooltip} from 'react-tooltip'
import TermsPage from "./views/TermsPage"
import PrivacyPage from "./views/PrivacyPage"
import AboutPage from "./views/AboutPage"

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [productId, setProductId] = useState()
  const [order, setOrder] = useState(false)
  

  // Google OAuth
  const [id, setId] = useState(window.sessionStorage.getItem('userId'))
  const [user, setUser] = useState(id ? true : false)

  useEffect(() => {
    console.log(id)
    console.log(user)
  }, [user]);
  
  
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
      <NavBar user={user} setUser={setUser} setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
      {/* {screenWidth <= 480 && <SmallScreensPopup />} */}
      <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        /> 
      <Tooltip id="my-tooltip" />
      <Routes>
        <Route
          path={'/'}
          element={<Home showLogin={showLogin} setShowLogin={setShowLogin} showSignup={showSignup} setShowSignup={setShowSignup} setUser={setUser}/>}
        ></Route>
        <Route
          path={'/dashboard'}
          element={user ? 
            <Dashboard setUser={setUser} productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>
            : <Navigate to={'/'}/>
          }
        ></Route>
        <Route
          path={'/existing-products'}
          element={user ?
            <ExistingProductsPage productId={productId} setProductId={setProductId} setUser={setUser} order={order} setOrder={setOrder} toast={toast}/>
            : <Navigate to={'/'} />
          }
        ></Route>
        <Route
          path={'/order-form'}
          element={user ?
            <OrderFormPage productId={productId} setProductId={setProductId} setUser={setUser}  order={order} setOrder={setOrder} toast={toast}/>
            : <Navigate to={'/'} />
          }
        ></Route>
        <Route
          path={'/about'}
          element={<AboutPage />}
        ></Route>
        <Route
          path={'/terms'}
          element={<TermsPage />}
        ></Route>
        <Route
          path={'/privacy'}
          element={<PrivacyPage />}
        ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
