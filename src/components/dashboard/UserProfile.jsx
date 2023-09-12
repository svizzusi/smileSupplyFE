import style from './UserProfile.module.css'

const UserProfile = () => {
  return (
    <section className={style.userProfileSection}>
      <div className={style.userProfileTopSection}>
        <div className={style.userProfileProfile}>
          <h1>User Profile</h1>
          <h2>USER NAME</h2>
          <h2>DENTAL OFFICE NAME</h2>
        </div>
        <div className={style.userProfileButtons}>
          <button>Existing Products</button>
          <button>Add New Product</button>
        </div>
      </div>
      <section className={style.userProfileProducts}>
        <h2>Products Needed</h2>
      </section>
    </section>
  )
};

export default UserProfile;
