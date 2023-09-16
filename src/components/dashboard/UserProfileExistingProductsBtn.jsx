import style from './UserProfile.module.css'
import { useNavigate } from 'react-router-dom'

const UserProfileExistingProductsBtn = () => {

    const navigate = useNavigate();

  return (
    <>
        <button
            onClick={() => navigate(`/updateProduct/${product._id}`)}
            >Existing Products
          </button>
    </>
  )
};

export default UserProfileExistingProductsBtn;
