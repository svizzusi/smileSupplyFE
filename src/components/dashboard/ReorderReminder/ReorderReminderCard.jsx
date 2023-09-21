import style from './ReorderReminder.module.css'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineShoppingCart } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'


const ReorderReminderCard = () => {

  const navigate = useNavigate();

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
          <span 
            onClick={() => navigate(`/updateproduct/${product._id}`)} 
            className={style.reorderReminderEditBtn}
            ><AiOutlineEdit />
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
