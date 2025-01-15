import product from "../productlist";
import Product from "../Components/Product";
import Navabar from "../Components/Navbar";
import "../Components/styles.css";
function Homepage() {
  return (
    <>
      <Navabar />
      <div className="product-main">
      {product.map((item) => (
        <Product
          key={item.id}
          img={item.imgUrl}
          pname={item.name}
          desp={item.description}
          price={item.price}
        />
      ))}
      </div>
    </>
  );
}

export default Homepage;
