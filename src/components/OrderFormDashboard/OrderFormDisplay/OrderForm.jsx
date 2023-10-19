import style from './OrderForm.module.css'
import OrderFormCard from "./OrderFormCard";
import OrderFormHeader from './OderFormHeader'
import { useState, useEffect } from 'react'
import { HiDocumentDownload } from 'react-icons/hi';
import { GrPowerReset } from 'react-icons/gr';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
        window.location.reload();
      }, 500);
    } catch (error) {
      // Handle any errors here
      console.error("Error removing orders:", error);
    }
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    const pdfContainer = document.getElementById('pdf-container');

    if (pdfContainer) {
      html2canvas(pdfContainer).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 15, 15, pdfContainer.clientWidth / 2, pdfContainer.clientHeight / 2);
        pdf.save('table.pdf');
      }).catch((error) => {
        console.error('Error generating PDF:', error);
      });
    } else {
      console.error("PDF container element not found.");
    }
  };

  return (
    <section className={style.orderFormSection}>
      <div>
        <h2 className={style.orderFormHeading}>Order Form</h2>
        {/* ... Your other content ... */}
      </div>
      <table className={style.orderFormTable} id="pdf-container">
        <OrderFormHeader />
        <OrderFormCard setShowEditProduct={setShowEditProduct} setProductId={setProductId}
          setOrderIds={setOrderIds}
          order={order} setOrder={setOrder} toast={toast} setTotalPrice={setTotalPrice} />
      </table>
      <section className={style.orderFormTotal}>
        <h3>Grand Total: ${totalPrice}</h3>
      </section>
      <div className={style.orderFormButtons}>
        <button
          onClick={generatePDF}
          className={style.orderFormBtns}
        ><span>Download Order Form</span>
          <HiDocumentDownload />
        </button>
        <button
          className={style.orderFormBtns}
          onClick={removeAllOrders}
        ><span>Reset Order Form</span> <GrPowerReset /></button>
      </div>
    </section>
  )
};

export default OrderForm;

