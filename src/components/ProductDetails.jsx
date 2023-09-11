import { useParams } from "react-router-dom";
import Styles from "./ProductDetails.module.css";
import { useEffect, useState } from "react";

export const SingleProduct = ({ content }) => {
  return (
    <div className="container">
      <div className={Styles.row} style={{ paddingTop: "46px" }}>
        <h5 className={Styles.about_item}>About This Item</h5>
        <p className={Styles.details}>
          This cozy parka has a water-resistant shell made of upcycled
          materials, synthetic down filling, and an abundance of pockets. There
          are six zipper-close pockets plus one roomy velcro-close pouch.
          Engineered for storage, this parka provides space for all the
          necessities you’ll bring on your next cold-weather adventure.
          console.log(content.description);
          {/* {content?.description} */}
        </p>
      </div>
      <div className={Styles.row} style={{ paddingTop: "12px" }}>
        <h5 className={Styles.specifications}>Specifications</h5>

        <ul className={Styles.ul}>
          <li className={Styles.bullet_point}>
            Care Instructions: Machine Wash
          </li>
          <li className={Styles.bullet_point}>Fit Type: Regular</li>
          <li className={Styles.bullet_point}>
            This Women Winter Jackets has good windproof and warm performance.
          </li>
          <li className={Styles.bullet_point}>
            Jackets for Women Stylish Latest Design Allows you to enjoy the
            outdoors on cold days.
          </li>
          <li className={Styles.bullet_point}>
            Lightweight women&apos;s winter jacket perfect for on-the-go,
            backpacking Perfect jackets for girls
          </li>
          <li className={Styles.bullet_point}>
            This jacket / coat is easy to match with your favorite top and
            t-shirt.
          </li>
          <li className={Styles.bullet_point}>
            It can be worn to work with zipper.
          </li>
          <li className={Styles.bullet_point}>
            This jackets for girls under budget is perfect to gift.
          </li>
        </ul>
      </div>
      <h5 style={{ paddingTop: "9px" }} className={Styles.show_less}>
        Show Less
      </h5>
    </div>
  );
};

const ProductDetails = () => {
  const postId = useParams().id;

  const [product, setProducts] = useState([]);

  const fetchUserData = () => {
    fetch(`https://dummyjson.com/products/${postId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        // console.log("data", data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // console.log("product:", product);

  return (
    <>
      {console.log("product:", product)}
      {product.products?.map((item) => (
        <SingleProduct content={item} key={item.id} />
      ))}
    </>
  );
};

export default ProductDetails;
