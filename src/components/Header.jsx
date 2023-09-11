import { Link } from "react-router-dom";
import { useState } from "react";

import Styles from "./Header.module.css";

import Logo from "../assets/Logo.svg";
import Bag_icon from "../assets/Icon-Bag.svg";
import Dropdown_icon from "../assets/drop-down.svg";

const Header = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.products.filter((product) => {
          return (
            value &&
            product &&
            product.description &&
            product.description.toLowerCase().includes(value)
          );
        });
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className={Styles.container}>
      <nav>
        <Link className={Styles.link}>About</Link>
        <Link className={Styles.link}>Contact</Link>
      </nav>
      <header>
        <Link to="/">
          <img className={Styles.logo} src={Logo} alt="" />
        </Link>

        <div className={Styles.drop_down}>
          <img src={Bag_icon} alt="" />
          <select className={Styles.select} defaultValue="Shop" name="" id="">
            <option className={Styles.option} value="Shop">
              Shop
            </option>
            <option className={Styles.option} value="mans-t-shirt">
              Man&apos;s t-shirt
            </option>
            <option className={Styles.option} value="womans-dress">
              Woman&apos;s Dress
            </option>
          </select>
          <img src={Dropdown_icon} alt="" />
        </div>

        <div className={Styles.input_div}>
          <Link className={Styles.searh_icon} />
          <input
            className={Styles.search_input}
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div className={Styles.sign_in_up}>
          <Link className={Styles.sign_up}>Sign Up</Link>
          <Link className={Styles.sign_in}>Sign In</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
