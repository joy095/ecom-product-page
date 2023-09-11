import ImageSlider from "./ImageSlider";
import Styles from "./Product.module.css";
import Big_img from "../assets/Mdoel-Snowboard-Lg.png";
import ProductDescription from "./ProductDescription";
import ProductDetails, { SingleProduct } from "./ProductDetails";
import Review from "./Review";
import SimilarProducts from "./SimilarProducts";

const Product = () => {
  return (
    <>
      <div
        className="container"
        style={{
          paddingTop: "60px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <div className={Styles.procuct_image}>
          <ImageSlider />
          <img className={Styles.Big_img} src={Big_img} alt="" />
        </div>
        <div>
          <ProductDescription />
        </div>
      </div>

      <SingleProduct />
      <Review />
      <SimilarProducts />
    </>
  );
};

export default Product;
