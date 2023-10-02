import style from './ExistingProducts.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit, AiOutlineShoppingCart} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';

const ExistingProductsCard = ({setShowEditProduct}) => {
  const navigate = useNavigate();

  // State to store the Products
  const [products, setProducts] = useState([]);

  // State to store the User id
  const [userId, setUserId] = useState();

  // Fetch UserName from the server on component mount
  useEffect(() => {
    const id = window.sessionStorage.getItem('userId')
    console.log("UserId from sessionStorage:", id);
    setUserId(id)
}, []);

  // Fetch products from the server on component mount
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/products/getProducts/${userId}`)
            console.log(response.data);
            setProducts(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    if (userId) {
        fetchData();
    }
}, [userId]);
  

  return (
    <tbody className={style.existingProductsTableBody}>
      {products.map((product, index) => {
        return (
      <tr 
        className={style.existingProductsTableRowCard} 
        key={product._id}>
        <td>{index}</td>
        <td>{product.name}</td>
        <td>A1A739</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.frequency}</td>
        <td>
          <span 
            onClick={() => navigate(`/updateproduct/${product._id}`)} 
            className={style.existingProductsEditBtn}
            ><AiOutlineEdit
              onClick={() => setShowEditProduct(true)}
            />
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
        )
      })}
    </tbody>
  )
};

export default ExistingProductsCard;
