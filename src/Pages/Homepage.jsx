// import product from "../productlist";
import Product from "../Components/Product";
import Navabar from "../Components/Navbar";
import "../Components/styles.css";
function Homepage() {
  return (
    <>
      <Navabar />
      <div className="product-main">
        <Product/>
      </div>
    </>
  );
}

export default Homepage;
