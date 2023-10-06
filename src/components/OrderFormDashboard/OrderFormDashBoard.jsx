import style from './OrderFormDashboard.module.css'
import OrderForm from './OrderFormDisplay/OrderForm'
import OrderFormSearch from './OrderFormSearch/OrderFormSearch'
import {useState} from 'react'
import EditProduct from '../dashboard/EditProduct/EditProduct'


const OrderFormDashBoard = (productId, setProductId, order, setOrder) => {

  const [showEditProduct, setShowEditProduct] = useState(false)
    return (
      <section className={style.orderFormDashboardSection}>
        {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId}/>}
        <section className={style.orderFormSearchSection}>
          <OrderFormSearch />
        </section>
        <section className={style.orderForm}>
          <OrderForm setShowEditProduct={setShowEditProduct} order={order} setOrder={setOrder} />
        </section>    
      </section>    
      )
    };

export default OrderFormDashBoard;
