import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logoSmall from '../../assets/images/logoSmall.png';
import { RiCloseCircleFill } from 'react-icons/ri';

const Signup = ({setShowSignup, showSignup}) => {

  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    navigate()

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <section 
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
            placeholder='Name'
            // value={name}
            // onChange={e => setName(e.target.value)}
          />
          <input
            className={style.signupInput}
            required
            type="email"
            placeholder='Email'
            // value={email}
            // onChange={e => setEmail(e.target.value)}
          />
          <input
            className={style.signupInput}
            required
            type="password"
            placeholder='Password'
            // value={password}
            // onChange={e => setPassword(e.target.value)}
          />
          <input
            className={style.signupInput}
            required
            type="password"
            placeholder='Confirm Password'
            // value={confirmPassword}
            // onChange={e => setConfirmPassword(e.target.value)}
          />
          <input
            className={style.signupSubmit}
            // disabled={!name || !email || !password || confirmPassword}
            type="submit"
            value='Submit'
          />
        </div>
      </form>
    </section>
  )
};

export default Signup;
