import Styles from "./ImageCard.module.css";

import Product_1 from "../assets/product-1.png";
import Product_2 from "../assets/product-2.png";
import Product_3 from "../assets/product-3.png";
import Product_4 from "../assets/product-4.png";
import Product_5 from "../assets/product-5.png";

import Shoping_card from "../assets/shopping_cart.svg";
import Heart_outline from "../assets/favorite_border.svg";

const ImageCard = () => {
  return (
    <div
      className={`${Styles.product_cards} ${Styles.col}`}
      style={{ marginTop: "25px", position: "relative" }}
    >
      <div className={Styles.heart_wrap}>
        <img src={Heart_outline} alt="" />
      </div>
      <div className={Styles.img_wrap}>
        <img src={Product_1} alt="" />
      </div>

      <p className={Styles.price}>
        Price: <span className={Styles.price_number}>$145</span>
      </p>

      <p className={Styles.desc}>
        APPLE Airpods Pro Wireless Headphones, WHITE
      </p>

      <p className={Styles.status}>In stock</p>

      <div
        className={Styles.row}
        style={{ justifyContent: "space-between", width: "100%" }}
      >
        <div className={Styles.card_btn}>
          <p>View more</p>
        </div>

        <div style={{ cursor: "pointer" }}>
          <img src={Shoping_card} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
