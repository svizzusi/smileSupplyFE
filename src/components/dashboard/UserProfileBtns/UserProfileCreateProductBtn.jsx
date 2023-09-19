import style from './UserProfileBtns.module.css'
import { useNavigate } from 'react-router-dom'

const UserProfileCreateProductBtn = () => {

    const navigate = useNavigate();

  return (
    <>
        <button
          className={style.UserProfileBtns}
          onClick={() => navigate(`/createProduct`)}
          >Add New Product
        </button>
    </>
  )
};

export default UserProfileCreateProductBtn;