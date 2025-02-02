// import product from "../productlist";
import Product from "../Components/Product";
import Navabar from "../Components/Navbar";
import Login from "../Pages/Login";
import "../styles.css";
// import DisplayProduct from "./DisplayProduct";
function Homepage() {
  return (
    <>
      <Navabar />
      <Login />
      {/* <div className="product-main"> */}
        {/* <Product/> */}
        {/* <DisplayProduct/> */}
      {/* </div> */}
    </>
  );
}

export default Homepage;
