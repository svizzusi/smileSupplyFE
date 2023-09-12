import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logoSmall from '../../assets/images/logoSmall.png';
import { RiCloseCircleFill } from 'react-icons/ri';

const Login = ({setShowLogin, showLogin, visable, onClose}) => {
  if (!visable) {
    return null;
  }

  function handleClose(e) {
    if (e.target.id === 'login') {
      onClose();
    }
  }

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    navigate()

    setEmail('');
    setPassword('');
  }

  return (
    <section 
      id="login"
      onClick={handleClose}
      className={style.loginFormSection}
    >
      <div className={style.loginFormIconContainer}>
        <RiCloseCircleFill 
          onClick={() => setShowLogin(false)}
          className={style.loginFormIcon}
        />
      </div>
      <form 
        onSubmit={handleSubmit}
        className={style.loginForm}
      >
        <div className={style.loginFormImage}>
          <img src={logoSmall} alt="logo" />
        </div>
        <div className={style.loginFormInputs}>
          <input
            className={style.loginInput}
            required
            type="email"
            placeholder='Email'
            // value={email}
            // onChange={e => setEmail(e.target.value)}
          />
          <input
            className={style.loginInput}
            required
            type="password"
            placeholder='Password'
            // value={password}
            // onChange={e => setPassword(e.target.value)}
          />
          <input
            className={style.loginSubmit}
            // disabled={!name || !email || !password || confirmPassword}
            type="submit"
            value='Submit'
          />
        </div>
      </form>
    </section>
  )
};

export default Login;
