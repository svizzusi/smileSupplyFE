import style from './ReorderReminder.module.css'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineShoppingCart } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'


const ReorderReminderCard = ({setShowEditProduct}) => {

  const navigate = useNavigate();
  const [productId, setProductId] = useState()

  return (
    <tbody className={style.ReorderReminderTableBody}>
      <tr className={style.ReorderReminderTableRowCard}>
        <td>1</td>
        <td>Lidocaine</td>
        <td>A1A739</td>
        <td>$10.76</td>
        <td>4</td>
        <td>28 days</td>
        <td>
          <span className={style.reorderReminderEditBtn}
            ><AiOutlineEdit 
              onClick={() => setShowEditProduct(true)}
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
            onClick={() => navigate(`/cart`)} 
            className={style.reorderReminderCartBtn}
            ><AiOutlineShoppingCart />
          </span>
        </td>
      </tr>
    </tbody>
  )
};

export default ReorderReminderCard;
