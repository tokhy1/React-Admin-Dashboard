import Single from "../../components/single/Single";
import "./product.scss";
import { singleProduct } from "../../data";

const Product = () => {
  // Make API request to fetch product data and send it to Single component.

  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  );
};

export default Product;
