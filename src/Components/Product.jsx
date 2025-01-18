import { useState } from "react";
import "../Components/styles.css";
import products from "../productlist";


function Product() {
  const [quantities , setQuantities] = useState({});

  const handleAddToCart = (product) =>{
  {
    // console.log(product)
    setQuantities((prev) =>{
      const current_quantity = prev[product.id] || 1;
      return {
        ...prev,
        [product.id] : {...product , quantity:current_quantity+1,

        },
      };
    });
  }};

  const decreaseQuantity =() =>
  {
setQuantities()
  }
  const increaseQuantity =() =>
    {
      
    }
    return (
    <>
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.imgUrl} alt={item.name} className="prod-img" />
          <div className="prod-details">
            <h4>{item.name}</h4>
            <p className="prod-desp">{item.description}</p>
            <p className="price">₹{item.price}</p>
          </div>
        <div className="Q-controls">
          {quantities[item.id]>0? (
            <div className="btn-controls">
            <button className="Q-btn" onClick={() => decreaseQuantity(item)}>-</button> 
            <span className="Q-number"> {quantities[item.id]}</span>
            <button className="Q-btn" onClick={() => increaseQuantity(item)}>+</button>
            </div>   
          
          ):
          (
          <button type="button" className="add-to-cart" onClick={()=> handleAddToCart(item)}>
            Add to Cart
          </button>
        )}
        </div>
        </div>
      ))
    };
      </>
    )};
 

export default Product;
