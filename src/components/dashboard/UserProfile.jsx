import style from './UserProfile.module.css'
import UserProfileWelcome from './UserProfileWelcome/UserProfileWelcome';
import UserProfileExistingProductsBtn from './UserProfileBtns/UserProfileExistingProductsBtn';
import UserProfileCreateProductBtn from './UserProfileBtns/UserProfileCreateProductBtn';
import ReorderReminder from './ReorderReminder/ReorderReminder';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';
import {useState, useEffect} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



const UserProfile = ({productId, setProductId, order, setOrder, toast}) => {

  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showEditProduct, setShowEditProduct] = useState(false)

    // State to store the Products
    const [products, setProducts] = useState([]);

  // State to store the User id
  const [userId, setUserId] = useState();
  
    // Fetch UserName from the server on component mount
    useEffect(() => {
      const id = window.sessionStorage.getItem('userId');
      console.log("UserId from sessionStorage:", id);
      setUserId(id);
    }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://odd-gold-anemone-cap.cyclic.app/products/getProducts/${userId}`);
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={style.userProfileSection}>
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} toast={toast} fetchData={fetchData}/>}
      {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} toast={toast}/>}
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserProfileExistingProductsBtn />
          <UserProfileCreateProductBtn setShowAddProduct={setShowAddProduct}/>
        </div>
      </div>
      <section className={style.reorderReminder}>
        <ReorderReminder setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast} products={products}  setProducts={setProducts} fetchData={fetchData} userId={userId}/>
      </section>
    </section>
  )
};

export default UserProfile;
