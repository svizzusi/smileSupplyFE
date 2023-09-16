import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import logoSmall from '../../assets/images/logoSmall.png';
import { RiCloseCircleFill } from 'react-icons/ri';


const Login = ({showLogin, setShowLogin}) => {

  const navigate = useNavigate()

  // Use useState to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const email = formData.email;
  const password = formData.password;

  function handleClose(e) {
    if (e.target.id === 'login') {
      setShowLogin(false);
    }
  }

  function handleChange(e) {
    // Update form data based on input name
    const { name, value } = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('api url', { email, password });
      console.log(res);
      console.log(res.data);
      console.log(res.data.message)
      console.log(res.data.success)
      
      if (res.data.success === false) {
        toast.error('Email and/or Password do not match, Try again', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else {
        window.sessionStorage.setItem('userName', res.data.userName)
        window.sessionStorage.setItem('userId', res.data.id)
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: '',
          confirmPassword: '',
        }));
        navigate('/dasboard');
        // Redirect or show success message
      }

    } catch (err) {
      console.error(err);
      // Handle error, show error message, etc.
    }
  };
  

  return (
    <section 
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
            // disabled={!name || !email || !password || !confirmPassword}
            type="submit"
            value='Submit'
          />
        </div>
      </form>
    </section>
  )
};

export default Login;
