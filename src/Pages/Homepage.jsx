// import product from "../productlist";
import Product from "../Components/Product.jsx";
import Navbar from "../Components/Navbar";
// import Login from "../Pages/Login";
import "../styles.css";
import DisplayProduct from "./DisplayProduct";
function Homepage() {
  return (
    <>
      <Navbar />
      <div className="product-main">
        <Product/>
        {/* <DisplayProduct/> */}
      </div>
    </>
  );
}

export default Homepage;
