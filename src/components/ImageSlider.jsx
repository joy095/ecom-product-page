import Styles from "./ImageSlider.module.css";

import Sm_img_1 from "../assets/Mdoel-Snowboard-Sm.png";
import Sm_img_2 from "../assets/Model-Close Up-Sm.png";
import Sm_img_3 from "../assets/Model-Mountain-Sm.png";
import Sm_img_4 from "../assets/Model-Tree-Sm.png";

const ImageSlider = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.upper_slider} />
      <img
        style={{ opacity: "1" }}
        className={Styles.img}
        src={Sm_img_1}
        alt=""
      />
      <img className={Styles.img} src={Sm_img_2} alt="" />
      <img className={Styles.img} src={Sm_img_3} alt="" />
      <img className={Styles.img} src={Sm_img_4} alt="" />
      <div className={Styles.lower_slider} />
    </div>
  );
};

export default ImageSlider;
