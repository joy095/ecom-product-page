import ProductListCard from "./ProductListCard";
import Styles from "./ProductListComponent.module.css";
import Sidebar from "./Sidebar";

const ProductListComponent = () => {
  return (
    <div className={Styles.row}>
      <div className={Styles.side_nav}>
        <Sidebar />
      </div>
      <div className={Styles.products}>
        <ProductListCard />
      </div>
    </div>
  );
};

export default ProductListComponent;
