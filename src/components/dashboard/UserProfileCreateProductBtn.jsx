import style from './UserProfile.module.css'
import { useNavigate } from 'react-router-dom'

const UserProfileCreateProductBtn = () => {

    const navigate = useNavigate();

  return (
    <>
        <button
          onClick={() => navigate(`/createProduct`)}
          >Add New Product
        </button>
    </>
  )
};

export default UserProfileCreateProductBtn;