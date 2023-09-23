import style from './OrderForm.module.css'
import OrderFormCard from "./OrderFormCard";
import OrderFormHeader from './OderFormHeader'

const OrderForm = ({setShowEditProduct}) => {
    return (
        <section className={style.orderFormSection}>
          <h2 className={style.orderFormHeading}>Order Form</h2>
          <table className={style.orderFormTable}>
            <OrderFormHeader />
            <OrderFormCard setShowEditProduct={setShowEditProduct}/>     
          </table>
        </section>
      )
    };

export default OrderForm;
