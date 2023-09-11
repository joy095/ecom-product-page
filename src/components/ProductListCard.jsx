import Shoping_card from "../assets/shopping_cart.svg";
import Heart_outline from "../assets/favorite_border.svg";

import Styles from "./ProductListCArd.module.css";

import { useGetProductsQuery } from "../app/api/apiSlice";

export const ProductListCard = ({ content }) => {
  return (
    <div
      className={`${Styles.product_cards} `}
      style={{ marginTop: "25px", position: "relative" }}
    >
      <div className={Styles.heart_wrap}>
        <img src={Heart_outline} alt="" />
      </div>
      <div className={Styles.img_wrap}>
        <img src={content.images[0]} alt="" />
      </div>

      <p className={Styles.price}>
        Price: <span className={Styles.price_number}>${content.price}</span>
      </p>

      <p className={Styles.desc}>{content.description}</p>

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

function PostsList() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  // console.log("posts", posts);

  let postContent;

  if (isLoading) {
    postContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    postContent = posts.products.map((item) => {
      return <ProductListCard content={item} key={item.id} />;
    });
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return <>{postContent}</>;
}
export default PostsList;
