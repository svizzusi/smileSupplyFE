import HeroSection from "../components/home/HeroSection";
import Login from "../components/home/Login";
import Signup from "../components/home/Signup";

const Home = ({showLogin, setShowLogin, showSignup, setShowSignup, setUser}) => {

  return (
    <>
      <HeroSection />
      {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} setUser={setUser} />}
      {showSignup && <Signup showSignup={showSignup} setShowSignup={setShowSignup} setUser={setUser}/>}
    </>
  )
};

export default Home;
