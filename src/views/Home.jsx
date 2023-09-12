import HeroSection from "../components/home/HeroSection";
import Login from "../components/home/Login";
import Signup from "../components/home/Signup";


const Home = ({showLogin, setShowLogin, showSignup, setShowSignup}) => {


  return (
    <>
      <HeroSection />
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </>
  )
};

export default Home;
