import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import logoSmall from '../../assets/images/logoSmall.png';
import { RiCloseCircleFill } from 'react-icons/ri';

const Signup = ({showSignup, setShowSignup}) => {

  const navigate = useNavigate()

  // Use useState to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  

  function handleClose(e) {
    if (e.target.id === 'signup') {
      setShowSignup(false);
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

    if (formData.password !== formData.confirmPassword) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: '',
        confirmPassword: '',
      }));
      return;
    }


    try {
      // const res = await axios.post('api url', { formData.name, formData.email, formData.password });
      // console.log(res);
      // console.log(res.data);
      // console.log(res.data.message)
      // console.log(res.data.success)
      
      // if (res.data.success === false) {
      // } else {
      //   window.sessionStorage.setItem('userName', res.data.userName)
      //   window.sessionStorage.setItem('userId', res.data.id)
        // Add the URL you want to navigate to inside navigate()
        // setFormData((prevFormData) => ({
        //   ...prevFormData,
        //   password: '',
        //   confirmPassword: '',
        // }));
      //   navigate('/home');
      //   // Redirect or show success message
      // }

    } catch (err) {
      console.error(err);
      // Handle error, show error message, etc.
    }
  };

  return (
    <section
      id="signup"
      onClick={handleClose}
      className={style.signupFormSection}
    >
      <div className={style.signupFormIconContainer}>
        <RiCloseCircleFill 
          onClick={() => setShowSignup(false)}
          className={style.signupFormIcon}
        />
      </div>
      <form 
        onSubmit={handleSubmit}
        className={style.signupForm}
      >
        <div className={style.signupFormImage}>
          <img src={logoSmall} alt="logo" />
        </div>
        <div className={style.signupFormInputs}>
          <input
            className={style.signupInput}
            required
            type="text"
            name="name" 
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className={style.signupInput}
            required
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
          onChange={handleChange}
          />
          <input
            className={style.signupInput}
            required
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            style={{
              backgroundColor:
                formData.confirmPassword === '' || formData.password === formData.confirmPassword
                  ? ''
                  : 'rgba(255,0,0,0.1)',
            }}
          />
          <input
            className={style.signupInput}
            required
            type="password"
            name="confirmPassword" 
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{
              backgroundColor:
                formData.confirmPassword === '' || formData.password === formData.confirmPassword
                  ? ''
                  : 'rgba(255,0,0,0.1)',
            }}
          />
          {formData.confirmPassword !== '' &&
          (formData.password !== formData.confirmPassword && (
            <span className={style.formDataSpan}>Passwords don't match</span>
          ))}
          <input
            className={style.signupSubmit}
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.password ||
              !formData.confirmPassword
            }
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
    </section>
  )
};

export default Signup;
