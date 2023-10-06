import style from './OrderForm.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

import React from "react";

const OrderFormCard = ({setShowEditProduct, order, setOrder}) => {

    const navigate = useNavigate();

    return (
        <tbody className={style.orderFormTableBody}>
          <tr className={style.orderFormTableRowCard}>
            <td>1</td>
            <td>Lidocaine</td>
            <td>A1A739</td>
            <td>$10.76</td>
            <td>4</td>
            <td>28 days</td>
            <td>
              <span 
                onClick={() => navigate(`/updateproduct/${product._id}`)} 
                className={style.orderFormEditBtn}
                ><AiOutlineEdit 
                  onClick={() => setShowEditProduct(true)}
                />
              </span>
            </td>
            <td>
              <span 
                onClick={() => handleDelete(product._id)}
                className={style.orderFormDeleteBtn}
                ><BsTrash />
              </span>
            </td>
          </tr>
        </tbody>
      )
    };

export default OrderFormCard;
