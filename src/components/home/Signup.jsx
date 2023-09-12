import logo from '../assets/images/logo.webp';

const Signup = () => {
  return (
    <>
      <form>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <input
          required
          type="text"
          placeholder='Name'
          value={name}
        />
        <input
          required
          type="email"
          placeholder='Email'
          value={email}
        />
        <input
          required
          type="password"
          placeholder='Password'
          value={password}
        />
        <input
          required
          type="password"
          placeholder='Confirm Password'
          value={confirmPassword}
        />
      </form>
    </>
  )
};

export default Signup;
