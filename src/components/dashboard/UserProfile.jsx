import style from './UserProfile.module.css'
import UserProfileWelcome from './UserProfileWelcome/UserProfileWelcome';
import UserProfileExistingProductsBtn from './UserProfileBtns/UserProfileExistingProductsBtn';
import UserProfileCreateProductBtn from './UserProfileBtns/UserProfileCreateProductBtn';
import ReorderReminder from './ReorderReminder/ReorderReminder';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';
import {useState} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UserProfile = ({productId, setProductId, order, setOrder}) => {

  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showEditProduct, setShowEditProduct] = useState(false)

  const productCreatedToast = () => {
    toast('Created product successfully')
  }
  const productNotCreatedToast = () => {
    toast('Failed to create product')
  }
  return (
    <section className={style.userProfileSection}>
       <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{zIndex:200}}
            />
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} productCreatedToast={productCreatedToast} productNotCreatedToast={productNotCreatedToast}/>}
      {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId}/>}
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserProfileExistingProductsBtn />
          <UserProfileCreateProductBtn setShowAddProduct={setShowAddProduct}/>
        </div>
      </div>
      <section className={style.reorderReminder}>
        <ReorderReminder setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} order={order} setOrder={setOrder}/>
      </section>
    </section>
  )
};

export default UserProfile;
