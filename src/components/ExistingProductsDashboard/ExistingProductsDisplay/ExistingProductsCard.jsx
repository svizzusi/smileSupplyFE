import style from './ExistingProducts.module.css'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineShoppingCart } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

const ExistingProductsCard = () => {
  const navigate = useNavigate();

  return (
    <tbody className={style.existingProductsTableBody}>
      <tr className={style.existingProductsTableRowCard}>
        <td>1</td>
        <td>Lidocaine</td>
        <td>A1A739</td>
        <td>$10.76</td>
        <td>4</td>
        <td>28 days</td>
        <td>
          <span 
            onClick={() => navigate(`/updateproduct/${product._id}`)} 
            className={style.existingProductsEditBtn}
            ><AiOutlineEdit />
          </span>
        </td>
        <td>
          <span 
            onClick={() => handleDelete(product._id)}
            className={style.existingProductsDeleteBtn}
            ><BsTrash />
          </span>
        </td>
        <td>
        <span 
            onClick={() => navigate(`/cart`)} 
            className={style.existingProductsCartBtn}
            ><AiOutlineShoppingCart />
          </span>
        </td>
      </tr>
    </tbody>
  )
};

export default ExistingProductsCard;
