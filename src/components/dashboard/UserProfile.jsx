import style from './UserProfile.module.css'
import UserProfileWelcome from './UserProfileWelcome/UserProfileWelcome';
import UserProfileExistingProductsBtn from './UserProfileBtns/UserProfileExistingProductsBtn';
import UserProfileCreateProductBtn from './UserProfileBtns/UserProfileCreateProductBtn';
import ReorderReminder from './ReorderReminder/ReorderReminder';



const UserProfile = () => {

  return (
    <section className={style.userProfileSection}>
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserProfileExistingProductsBtn />
          <UserProfileCreateProductBtn />
        </div>
      </div>
      <section className={style.reorderReminder}>
        <ReorderReminder />
      </section>
    </section>
  )
};

export default UserProfile;
