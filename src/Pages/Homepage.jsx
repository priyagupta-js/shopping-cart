import product from "../productlist";
import Product from "../Components/Product";
import Navabar from "../Components/Navbar";
function Homepage() {
  return (
    <>
      <Navabar />
      {product.map((item) => (
        <Product
          key={item.id}
          img={item.imgUrl}
          pname={item.name}
          desp={item.description}
          price={item.price}
        />
      ))}
      {/* 
      />
      <Product
        img={product[1].imgUrl}
        pname={product[1].name}
        desp={product[1].description}
        price={product[1].price}
      />
      <Product
        img={product[2].imgUrl}
        pname={product[2].name}
        desp={product[2].description}
        price={product[2].price}
      /> */}
    </>
  );
}

export default Homepage;
