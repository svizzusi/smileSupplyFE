import style from './ReorderReminder.module.css'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineShoppingCart } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {useState, useEffect} from 'react'


const ReorderReminderCard = ({setShowEditProduct, productId, setProductId}) => {

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
              const res = await axios.get(`http://localhost:3000/products/getProducts/${userId}`)
              console.log(res.data);
              setProducts(res.data);
          } catch (err) {
              console.log(err);
          }
      };
  
      if (userId) {
          fetchData();
      }
  }, [userId]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/products/deleteProduct/${id}`)
        .then(() => {
            // Remove the deleted product from the local state
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
        })
        .catch((err) => console.log(err));
  };

  return (
    <tbody className={style.reorderReminderTableBody}>
      {products.filter(product => product.frequency !== '').map((product, index) => {
          return (
        <tr 
          className={style.reorderReminderTableRowCard} 
          key={product._id}>
          <td>{index +1}</td>
          <td>{product.name}</td>
          <td>{product._id.slice(-5)}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>{product.frequency === '' ? 'Non-Recurring' : product.frequency}</td>
          <td>
            <span className={style.reorderReminderEditBtn}
              ><AiOutlineEdit
                onClick={() => {
                  setShowEditProduct(true)
                  setProductId(product._id)
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
              onClick={() => navigate(`/cart`)} 
              className={style.reorderReminderCartBtn}
              ><AiOutlineShoppingCart />
            </span>
          </td>
        </tr>
          )
        })}
    </tbody>
  )
};

export default ReorderReminderCard;
