import HeroSection from "../components/home/HeroSection";
import Login from "../components/home/Login";


const Home = ({showLogin, setShowLogin}) => {


  return (
    <>
      <HeroSection />
      {showLogin && <Login />}
    </>
  )
};

export default Home;
