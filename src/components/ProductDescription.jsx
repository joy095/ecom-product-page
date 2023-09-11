import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Styles from "./ProductDescription.module.css";

// import Star from "../assets/star-regular.svg";
// import StarHalf from "../assets/star-half-stroke-regular.svg";
import Info from "../assets/ant-design_info.svg";
import Bag from "../assets/bi_bag-plus.svg";
import Cart from "../assets/bi_cart-plus.svg";
import Heart from "../assets/bi_heart-plus.svg";

const ProductDescription = () => {
  // const ratingChanged = (newRating) => {
  //   console.log(newRating);
  // };

  return (
    <>
      <div className={Styles.link_wrap}>
        <Link className={Styles.link}>Home</Link>
        <Link className={Styles.link}>Shop</Link>
        <Link className={Styles.link}>The Long Parka</Link>
      </div>

      <h2>The Long Parka</h2>

      <div className={Styles.row} style={{ gap: "10px" }}>
        <ReactStars
          classNames={Styles.start}
          count={5}
          // onChange={ratingChanged}
          size={24}
          value={3.5}
          isHalf={true}
          // emptyIcon={Star}
          // halfIcon={StarHalf}
          // fullIcon={Star}
          activeColor="#ffd700"
          edit={true}
        />

        <p className={Styles.review_count}>See All Reviews (22)</p>
      </div>

      <div className={Styles.row} style={{ gap: "12px", paddingTop: "22px" }}>
        <del className={Styles.price}>$195</del>
        <p className={Styles.current_price}>$145</p>
        <span className={Styles.sale_btn}>On Sale</span>
        <p className={Styles.offer_date}>Offer ends April, 27</p>
      </div>

      <div className={Styles.row} style={{ gap: "5px", paddingTop: "27px" }}>
        <h5 className={Styles.size}>Size</h5>
        <img src={Info} alt="" style={{ cursor: "help" }} />
      </div>

      <div className={Styles.row} style={{ gap: "16px", paddingTop: "12px" }}>
        <p className={Styles.size_box}>XS</p>
        <p className={Styles.size_box}>S</p>
        <p className={Styles.size_box}>M</p>
        <p className={Styles.size_box}>L</p>
        <p className={Styles.size_box}>XL</p>
        <p className={Styles.size_box}>XXL</p>
      </div>

      <div className={Styles.row} style={{ paddingTop: "24px" }}>
        <h5 className={Styles.color}>Color</h5>
      </div>

      <div className={Styles.row} style={{ paddingTop: "12px", gap: "16px" }}>
        <span className={Styles.color_yellow_box}>
          <p className={Styles.color_yellow_box_text}>Yellow</p>
        </span>
        <span className={Styles.color_red_box}>
          <p className={Styles.color_yellow_box_text}>Red</p>
        </span>
        <span className={Styles.color_black_box}>
          <p className={Styles.color_yellow_box_text}>Black</p>
        </span>
      </div>

      <div className={Styles.row} style={{ paddingTop: "24px", gap: "19px" }}>
        <div className={Styles.add_card}>
          <img className={Styles.btn_img} src={Cart} alt="" />
          Add to Cart
        </div>
        <div className={Styles.buy_now}>
          <img className={Styles.btn_img} src={Bag} alt="" />
          Buy Now
        </div>
        <div className={Styles.add_wishlist}>
          <img className={Styles.btn_img} src={Heart} alt="" />
          Add to Whislist
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
