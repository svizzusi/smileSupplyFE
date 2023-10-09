import style from './OrderForm.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import axios from 'axios';
import {useState, useEffect} from 'react'


const OrderFormCard = ({setShowEditProduct, setProductId, order, setOrder, toast}) => {
  
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

const removeFromOrder = (id) => {
  setOrder(false)
  axios.put(`http://localhost:3000/products/orderProduct/${id}`, {order: false})
  .then( (res) => {
    console.log(res)
  } )
  .catch(err => console.log(err))
  toast.success('Successfully removed product from order form', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    setTimeout(() => {
      location.reload()
    }, 3000)
}

const copyToClipboard = (productID) => {
  try {
    navigator.clipboard.writeText(productID)
      .then(() => {
        toast.success('Successfully coppied product ID to clipboard', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
      .catch((error) => {
        console.error('Clipboard writeText failed:', error);
        // Handle the error here, such as displaying a message to the user.
      });
  } catch (error) {
    console.error('Clipboard API not supported:', error);
    // Handle the lack of Clipboard API support gracefully.
  }
};

return (
  <tbody className={style.orderFormTableBody}>
    {products.filter(product => product.order !== false).map((product, index) => {
        return (
      <tr 
        className={style.orderFormTableRowCard} 
        key={product._id}>
        <td>{index +1}</td>
        <td>{product.name}</td>
        <td onClick={() => copyToClipboard(product.productId)}>{product.productId}</td>
        <td>${product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.frequency === '' ? 'Non-Recurring' : product.frequency}</td>
        <td>
          <span className={style.orderFormEditBtn}
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
            onClick={() => {
              removeFromOrder(product._id)    
            }} 
            className={style.orderFormDeleteBtn}
            ><BsTrash />
          </span>
        </td>
      </tr>
        )
      })}
  </tbody>
)
};

export default OrderFormCard;
