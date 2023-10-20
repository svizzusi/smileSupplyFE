import style from './OrderFormDashboard.module.css'
import OrderForm from './OrderFormDisplay/OrderForm'
import {useState, useEffect} from 'react'
import EditProduct from '../dashboard/EditProduct/EditProduct'
import {useNavigate} from 'react-router-dom'


const OrderFormDashBoard = ({productId, setProductId, order, setOrder, toast}) => {

  const navigate = useNavigate()

   // Fetch UserName from the server on component mount
   useEffect(() => {
    const userName = window.sessionStorage.getItem('userName')
    if (!userName) {
      navigate('/')
    } else {
    console.log("UserName from sessionStorage:", userName);
    };
  }, [])

  const [showEditProduct, setShowEditProduct] = useState(false)
    return (
      <section className={style.orderFormDashboardSection}>
        {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} toast={toast}/>}
        <section className={style.orderForm}>
          <OrderForm setShowEditProduct={setShowEditProduct} order={order} setOrder={setOrder} toast={toast} setProductId={setProductId}/>
        </section>    
      </section>    
      )
    };

export default OrderFormDashBoard;
