import style from './UserProfile.module.css'
import { useNavigate } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'

const UserProfileProductsNeeded = () => {

    const navigate = useNavigate();

  return (
    <>
        <h2>Products Needed</h2>
        <article>
       
            
        </article>
        <button 
          onClick={() => navigate(`/updateproduct/${product._id}`)} 
          className={style.userProfileEditBtn}
          ><AiOutlineEdit />
        </button>
        <button 
          onClick={() => handleDelete(product._id)}
          className={style.userProfileDeleteBtn}
          ><BsTrash />
        </button>
    </>
  )
};

export default UserProfileProductsNeeded;
