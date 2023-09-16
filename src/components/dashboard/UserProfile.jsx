import style from './UserProfile.module.css'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserProfileWelcome from './UserProfileWelcome';
import UserProfileExistingProductsBtn from './UserProfileExistingProductsBtn';
import UserProfileCreateProductBtn from './UserProfileCreateProductBtn';
import UserProfileProductsNeeded from './UserProfileProductsNeeded';

const UserProfile = () => {

  const navigate = useNavigate();

  // State to store the User id
  const [userId, setUserId] = useState();

  // State to store the products
  const [products, setProducts] = useState([]);

  // Fetch UserName from the server on component mount
  useEffect(() => {
    const name = window.sessionStorage.getItem('userName')
    const id = window.sessionStorage.getItem('userId')
    setUserName(name)
    setUserId(id)
}, []);

// Fetch products from the server on component mount
useEffect(() => {
  const fetchData = async () => {
      try {
          // const response = await axios.get(`https://easy-puce-snapper-ring.cyclic.cloud/todos/todo/${userId}`);
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

// const handleDelete = (id) => {
//   // axios.delete(`https://easy-puce-snapper-ring.cyclic.cloud/todos/deletetask/${id}`)
//       .then(() => {
//           // Remove the deleted task from the local state
//           setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
//       })
//       .catch((err) => console.log(err));
// };


  return (
    <section className={style.userProfileSection}>
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserProfileExistingProductsBtn />
          <UserProfileCreateProductBtn />
        </div>
      </div>
      <section className={style.userProfileProducts}>
        <UserProfileProductsNeeded />
      </section>
    </section>
  )
};

export default UserProfile;
