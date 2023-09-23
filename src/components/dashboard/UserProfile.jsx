import style from './UserProfile.module.css'
import UserProfileWelcome from './UserProfileWelcome/UserProfileWelcome';
import UserProfileExistingProductsBtn from './UserProfileBtns/UserProfileExistingProductsBtn';
import UserProfileCreateProductBtn from './UserProfileBtns/UserProfileCreateProductBtn';
import ReorderReminder from './ReorderReminder/ReorderReminder';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';
import {useState} from 'react'



const UserProfile = () => {

  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showEditProduct, setShowEditProduct] = useState(false)

  return (
    <section className={style.userProfileSection}>
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
      {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} />}
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserProfileExistingProductsBtn />
          <UserProfileCreateProductBtn setShowAddProduct={setShowAddProduct}/>
        </div>
      </div>
      <section className={style.reorderReminder}>
        <ReorderReminder setShowEditProduct={setShowEditProduct} />
      </section>
    </section>
  )
};

export default UserProfile;
