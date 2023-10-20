import style from './UserProfileWelcome.module.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const UserProfileWelcome = () => {
    const navigate = useNavigate()
    // State to store the User name
    const [userName, setUserName] = useState('');

  // Fetch UserName from the server on component mount
  useEffect(() => {
    const userName = window.sessionStorage.getItem('userName')
    if (!userName) {
      navigate('/')
    } else {
    console.log("UserName from sessionStorage:", userName);
    setUserName(userName)
    };
  }, [])

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