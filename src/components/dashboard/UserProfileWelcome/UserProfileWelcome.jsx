import style from './UserProfileWelcome.module.css'
import {useState} from 'react'

const UserProfileWelcome = () => {

    // State to store the User name
    const [userName, setUserName] = useState('David');

  return (
    <>
      <div className={style.userProfileProfile}>
          <h1>Welcome to Smile Supply</h1>
          <h2>{userName}</h2>
      </div>
    </>
  )
};

export default UserProfileWelcome;
