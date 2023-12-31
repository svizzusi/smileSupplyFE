import style from './ReorderReminder.module.css';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineShoppingCart } from 'react-icons/ai';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {startOfWeek} from 'date-fns'


const ReorderReminderCard = ({ setShowEditProduct, setProductId, order, setOrder, toast, products, setProducts, fetchData, userId}) => {
  
  // Fetch products from the server on component mount
  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleDelete = (id) => {
    axios
      .delete(`https://odd-gold-anemone-cap.cyclic.app/products/deleteProduct/${id}`)
      .then(() => {
        // Remove the deleted product from the local state
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      })
      .catch((err) => console.log(err));
    toast.success('Successfully deleted product', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const addToOrder = (id) => {
    setOrder(true);
    axios.put(`https://odd-gold-anemone-cap.cyclic.app/products/orderProduct/${id}`, { order: true })
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
    toast.success('Successfully added product to the order form', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const currentWeek = startOfWeek(new Date(), { weekStartsOn: 0 })

  return (
    <tbody className={style.reorderReminderTableBody}>
      {products.filter(product => product.frequency !== 0 && currentWeek === product.reorderReminderWeek).map((product, index) => {
        return (
          <tr
            className={style.reorderReminderTableRowCard}
            key={product._id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.productId}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.quantity}</td>
            <td>{product.frequency === 0 ? 'Non-Recurring' : product.frequency}{product.frequency === 1 ? ' Week' : null}{product.frequency >= 2 ? ' Weeks' : null}</td>
            <td>
              <span className={style.reorderReminderEditBtn}
                ><AiOutlineEdit
                  onClick={() => {
                    setShowEditProduct(true);
                    setProductId(product._id);
                  }}
                />
              </span>
            </td>
            <td>
              <span
                onClick={() => handleDelete(product._id)}
                className={style.reorderReminderDeleteBtn}
                ><BsTrash />
              </span>
            </td>
            <td>
              <span
                onClick={() => {
                  addToOrder(product._id);
                }}
                className={style.reorderReminderCartBtn}
                ><AiOutlineShoppingCart />
              </span>
            </td>
          </tr>
        )
      })}
    </tbody>
  );
};

export default ReorderReminderCard;
