import style from './OrderForm.module.css'
import OrderFormCard from "./OrderFormCard";
import OrderFormHeader from './OderFormHeader'
import {useState, useEffect} from 'react'
// import {HiDocumentDownload} from 'react-icons/hi';
import {GrPowerReset} from 'react-icons/gr';
import axios from 'axios'

const OrderForm = ({ setShowEditProduct, setProductId, order, setOrder, toast }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderIds, setOrderIds] = useState([]);


 
  const removeAllOrders = async () => {
    try {
      for (const id of orderIds) {
        // Make an API call to update orders
        await axios.put(`https://odd-gold-anemone-cap.cyclic.app/products/resetFrequency/${id}`);
        console.log(`Order removed for product with ID: ${id}`);
      }
  
      // Clear the orderIds
      setOrderIds([]);
      setTimeout(() => {
        location.reload();
      }, 500);
    } catch (error) {
      // Handle any errors here
      console.error("Error removing orders:", error);
    }
  };

  useEffect(() => {
    console.log(orderIds);
  }, [orderIds]);

    return (
        <section className={style.orderFormSection}>
          <div>
            <h2 className={style.orderFormHeading}>Order Form</h2>
            <p className={style.orderFormParagraph}>Welcome to the Smile Supply Order Form, your gateway to effortless dental inventory management. Our intuitive order form simplifies the process with just a few clicks.</p> 
            <p className={style.orderFormParagraph}>Start by selecting the product you need, and with a single click, it's copied to your clipboard and highlighted in red, ensuring you don't double up on items. Next, hop over to your preferred supplier's website and paste the product ID to add it to your shopping cart – no more manual data entry hassles. Repeat this for each item on your order list, and when you're done, simply hit the "Clear Order Form" button on Smile Supply. This action resets product order frequencies to your specified preferences and readies the form for your next order. Streamline your dental inventory management with Smile Supply – it's that easy! Enjoy the convenience of a well-organized and efficient ordering process.</p>
          </div>
          <table className={style.orderFormTable}>
            <OrderFormHeader />
            <OrderFormCard setShowEditProduct={setShowEditProduct} setProductId={setProductId}
             setOrderIds={setOrderIds} 
            order={order} setOrder={setOrder} toast={toast} setTotalPrice={setTotalPrice}/>     
          </table>
          <section className={style.orderFormTotal}>
            <h3>Grand Total: ${totalPrice}</h3>
          </section>
          <div className={style.orderFormButtons}>
            {/* <button className={style.orderFormBtns}><span>Download Order Form</span> <HiDocumentDownload/></button> */}
            <button 
              className={style.orderFormBtns}
              onClick={removeAllOrders}
            ><span>Reset Order Form</span> <GrPowerReset/></button>
          </div>
        </section>
      )
    };

export default OrderForm;
