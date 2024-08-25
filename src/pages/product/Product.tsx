import Single from "../../components/single/Single";
import "./product.scss";

const Product = () => {
  // Make API request to fetch product data and send it to Single component.

  return (
    <div className="product">
      <Single />
    </div>
  );
};

export default Product;
