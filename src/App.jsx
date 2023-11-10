import { Route, Routes, Navigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import NavBar from './layout/NavBar/NavBar'
import Home from "./views/Home"
import Dashboard from "./views/Dashboard"
import Footer from "./layout/footer/Footer"
import ExistingProductsPage from "./views/ExistingProductsPage"
import OrderFormPage from "./views/OrderFormPage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Tooltip} from 'react-tooltip'
import TermsPage from "./views/TermsPage"
import PrivacyPage from "./views/PrivacyPage"
import AboutPage from "./views/AboutPage"
import axios from 'axios'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [productId, setProductId] = useState()
  const [order, setOrder] = useState(false)
  

  // Google OAuth
  const [id, setId] = useState(window.sessionStorage.getItem('userId'))
  const [user, setUser] = useState(id ? true : false)

  // const axiosWithCredentials = axios.create({
  //   withCredentials: true,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Credentials': true
  //   }
  // })

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const res = await axiosWithCredentials.get('https://odd-gold-anemone-cap.cyclic.app/auth/login/success')
  //       console.log(res)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getUser()
  // }, [user]);

  return (
    <>
      <NavBar user={user} setUser={setUser} setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
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
