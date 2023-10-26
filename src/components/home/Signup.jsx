import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import logoSmall from '../../assets/images/logoSmall.png';
import { RiCloseCircleFill } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

const Signup = ({showSignup, setShowSignup}) => {


  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
     
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });


    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log(profile.name)
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

  const navigate = useNavigate()

  useEffect(() => {
    window.sessionStorage.removeItem('userName')
    window.sessionStorage.removeItem('userId')
  }, [])

  // Use useState to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  
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
      toast('Passwords did not match, Please retry')
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: '',
        confirmPassword: '',
      }));
      return;
    }

    setLoading(true);

    const name = formData.name
    const email = formData.email
    const password = formData.password

    try {
      const res = await axios.post('https://odd-gold-anemone-cap.cyclic.app/users/signup', { name, email, password });
      console.log(res);
      console.log(res.data);
      console.log(res.data.message)
      console.log(res.data.success)
      
      if (res.data.success === false) {
        toast(res.data.message)
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: '',
          confirmPassword: '',
        }))
      } else {
        window.sessionStorage.setItem('userName', res.data.userName)
        window.sessionStorage.setItem('userId', res.data.id)
        
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }));
        navigate('/dashboard');
      }

      setLoading(false);

    } catch (err) {
      console.error(err);
      setLoading(false);
      // Handle error, show error message, etc.
    }
  };

  return (
    <>
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
            <button
              className={style.signupSubmit}
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword
              }
              type="submit"
              value="Sign Up"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            <div 
              className={style.signupGoogleSubmit}
              onClick={() => login()}>
              Sign up with Google <FcGoogle />
            </div>
          </div>
        </form>
      </section>
    </>
  )
};

export default Signup;
