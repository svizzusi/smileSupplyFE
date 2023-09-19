import style from './UserProfileProducts.module.css'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'


const UserProfileProductsCard = () => {

  const navigate = useNavigate();

  return (
    <tbody>
    <tr>
      <td>#</td>
      <td>Product Name</td>
      <td>Product ID</td>
      <td>Product Price</td>
      <td>Product Quantity</td>
      <td>Order Frequency</td>
      <td>
        <button 
          onClick={() => navigate(`/updateproduct/${product._id}`)} 
          className={style.userProfileEditBtn}
          ><AiOutlineEdit />
        </button>
      </td>
      <td>
        <button 
          onClick={() => handleDelete(product._id)}
          className={style.userProfileDeleteBtn}
          ><BsTrash />
        </button>
      </td>
      <td>Add to Order</td>
    </tr>
  </tbody>
  )
};

export default UserProfileProductsCard;
