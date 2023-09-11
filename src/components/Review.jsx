import Styles from "./Review.module.css";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  return (
    <div className="container">
      <div className={Styles.col} style={{ paddingTop: "27px", gap: "16px" }}>
        <h5 className={Styles.review}>Reviews (22)</h5>

        <div className={Styles.review_box}>
          <div
            className={Styles.row}
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <div className={Styles.row} style={{ gap: "10px" }}>
              {/* <img src="" alt="" /> */}
              <p className={Styles.sm_avatar}>ED</p>
              <h5 className={Styles.sm_name}>Ed Sheeran</h5>
              <div className={Styles.sm_size_box}>XL</div>
              <div className={Styles.sm_color_box}>Yellow</div>
            </div>

            <ReactStars
              classNames={Styles.start}
              count={5}
              size={24}
              value={4.5}
              isHalf={true}
              activeColor="#ffd700"
              edit={false}
            />
          </div>

          <div className={Styles.row}>
            <p className={Styles.sm_review_description}>
              Drop top designer clothes. Front row at fashion shows. "What d'you
              do?" and "Who d'you know?". Inside the world of beautiful people.
            </p>
          </div>
        </div>

        <div className={Styles.review_box}>
          <div
            className={Styles.row}
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <div className={Styles.row} style={{ gap: "10px" }}>
              {/* <img src="" alt="" /> */}
              <p className={Styles.sm_avatar}>TS</p>
              <h5 className={Styles.sm_name}>Taylor Swift</h5>
              <div className={Styles.sm_size_box}>L</div>
              <div className={Styles.sm_color_box}>Red</div>
            </div>

            <ReactStars
              classNames={Styles.start}
              count={5}
              size={24}
              value={5}
              isHalf={true}
              activeColor="#ffd700"
              edit={false}
            />
          </div>

          <div className={Styles.row}>
            <p className={Styles.sm_review_description}>
              There is an indentation. In the shape of you. Only bought this
              dress so you could take it off. You made your mark on me, golden
              tattoo. Only bought this dress so you could take it off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
