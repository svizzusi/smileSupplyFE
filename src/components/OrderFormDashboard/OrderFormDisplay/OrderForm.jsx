import style from './OrderForm.module.css';
import OrderFormCard from "./OrderFormCard";
import OrderFormHeader from './OderFormHeader';
import { useState, useEffect } from 'react';
import { HiDocumentDownload } from 'react-icons/hi';
import { GrPowerReset } from 'react-icons/gr';
import axios from 'axios';
import ReactToPrint from 'react-to-print'; // Import ReactToPrint
import React, { useRef } from 'react';

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

  // Create a ref for the component you want to print
  const componentRef = useRef();

  return (
    <section className={style.orderFormSection}>
      <div>
        <h2 className={style.orderFormHeading}>Order Form</h2>
        {/* ... Your existing content ... */}
      </div>

      <table className={style.orderFormTable}>
        <OrderFormHeader />
        <OrderFormCard
          setShowEditProduct={setShowEditProduct}
          setProductId={setProductId}
          setOrderIds={setOrderIds}
          order={order}
          setOrder={setOrder}
          toast={toast}
          setTotalPrice={setTotalPrice}
        />
      </table>

      <section className={style.orderFormTotal}>
        <h3>Grand Total: ${totalPrice}</h3>
      </section>

      <div className={style.orderFormButtons}>
        <ReactToPrint
          trigger={() => (
            <button className={style.orderFormBtns}>
              <span>Download Order Form</span>
              <HiDocumentDownload />
            </button>
          )}
          content={() => componentRef.current} // Specify the component to print
        />
        <button
          className={style.orderFormBtns}
          onClick={removeAllOrders}
        >
          <span>Reset Order Form</span> <GrPowerReset />
        </button>
      </div>
      
      {/* The component you want to print */}
      <div style={{ display: 'none' }}>
        <PrintableComponent ref={componentRef} />
      </div>
    </section>
  );
};

export default OrderForm;
