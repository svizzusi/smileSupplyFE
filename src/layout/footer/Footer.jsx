import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import { RiTwitterXFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={style.footerContainer}>  
      <footer className={style.footer}>
        <span className={style.footerLogo}>Smile Supply</span>
        <div className={style.footerLinks}>
          <Link>About Us</Link>
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className={style.footerSocials}>
          <RiTwitterXFill className={style.footerSocialsLinks}/>
          <FaLinkedinIn className={style.footerSocialsLinks}/>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
