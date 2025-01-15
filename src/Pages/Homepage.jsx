import product from "../Components/productlist";
import Product from "../Components/Product";
import Navabar from "../Components/Navbar";
function Homepage()
{
    return(
        <>
        <Navabar />
        
        <Product
        img={product[0].imgUrl}
        pname={product[0].name}
        desp={product[0].description}
        price={product[0].price}
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
      />
      </>
    );
}

export default Homepage;