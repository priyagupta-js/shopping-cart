// import product from "../productlist";
import Product from "../Components/Product";
import Navabar from "../Components/Navbar";
import "../styles.css";
// import DisplayProduct from "./DisplayProduct";
function Homepage() {
  return (
    <>
      <Navabar />
      <div className="product-main">
        <Product/>
        {/* <DisplayProduct/> */}
      </div>
    </>
  );
}

export default Homepage;
