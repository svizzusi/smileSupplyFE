import style from './UserProfile.module.css'
import UserProfileWelcome from './UserProfileWelcome/UserProfileWelcome';
import UserProfileExistingProductsBtn from './UserProfileBtns/UserProfileExistingProductsBtn';
import UserProfileCreateProductBtn from './UserProfileBtns/UserProfileCreateProductBtn';
import ReorderReminder from './ReorderReminder/ReorderReminder';
import AddProduct from './addProduct/AddProduct';
import {useState} from 'react'



const UserProfile = () => {

  const [showAddProduct, setShowAddProduct] = useState(false)

  return (
    <section className={style.userProfileSection}>
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserProfileExistingProductsBtn />
          <UserProfileCreateProductBtn setShowAddProduct={setShowAddProduct}/>
        </div>
      </div>
      <section className={style.reorderReminder}>
        <ReorderReminder />
      </section>
    </section>
  )
};

export default UserProfile;
