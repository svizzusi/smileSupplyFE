import style from './OrderForm.module.css'
import OrderFormCard from "./OrderFormCard";
import OrderFormHeader from './OderFormHeader'

const OrderForm = ({setShowEditProduct, setProductId, order, setOrder, toast}) => {
    return (
        <section className={style.orderFormSection}>
          <h2 className={style.orderFormHeading}>Order Form</h2>
          <table className={style.orderFormTable}>
            <OrderFormHeader />
            <OrderFormCard setShowEditProduct={setShowEditProduct} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>     
          </table>
        </section>
      )
    };

export default OrderForm;
