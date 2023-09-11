import Styles from "./Footer.module.css";

import Logo from "../assets/Logo.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Location from "../assets/location.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <div className={Styles.col} style={{ gap: "23px" }}>
        <Link to="/" className={Styles.row} style={{ marginLeft: "-23px" }}>
          <img
            style={{ width: "168.244px", height: " 43px" }}
            src={Logo}
            alt=""
          />
        </Link>
        <div className={Styles.row}>
          <span>
            <img src={Location} alt="" />
          </span>
          <p className={Styles.desc}>8819 Ohio St. South Gate, CA 90280</p>
        </div>
        <div className={Styles.row}>
          <span>
            <img src={Email} alt="" />
          </span>
          <a className={Styles.desc} href="mailto:Ourstudio@hello.com">
            Ourstudio@hello.com
          </a>
        </div>
        <div className={Styles.row}>
          <span>
            <img src={Phone} alt="" />
          </span>
          <a className={Styles.desc} href="tel:+1 386-688-3295">
            +1 386-688-3295
          </a>
        </div>
      </div>
      <div className={Styles.col} style={{ gap: "23px" }}>
        <h4 className={Styles.title}>Services</h4>
        <p className={Styles.desc}>Illustration</p>
        <p className={Styles.desc}>Mobile Design</p>
        <p className={Styles.desc}>Motion Graphic</p>
        <p className={Styles.desc}>Web Design</p>
        <p className={Styles.desc}>Development</p>
        <p className={Styles.desc}>SEO</p>
      </div>
      <div className={Styles.col} style={{ gap: "23px" }}>
        <h4 className={Styles.title}>Company</h4>
        <p className={Styles.desc}>Service</p>
        <p className={Styles.desc}>Features </p>
        <p className={Styles.desc}>Our Team</p>
        <p className={Styles.desc}>Portfolio</p>
        <p className={Styles.desc}>Blog</p>
        <p className={Styles.desc}>Contact Us</p>
      </div>
      <div className={Styles.col} style={{ gap: "23px" }}>
        <h4 className={Styles.title}>Our Social Media</h4>
        <p className={Styles.desc}>Dribbble</p>
        <p className={Styles.desc}>Behance</p>
        <p className={Styles.desc}>Medium</p>
        <p className={Styles.desc}>Instagram</p>
        <p className={Styles.desc}>Facebook</p>
        <p className={Styles.desc}>Twitter</p>
      </div>

      <p className={Styles.copyright}>Copyright 2023</p>
    </footer>
  );
};

export default Footer;
