import { useState } from "react";
import "../Components/styles.css";




function Product(props) {
  const [quantity , setQuantity] = useState({});

  const addToCart = () =>
  {
console.log("clicked");
  }
  return (
    <>
      <div className="product-container">
        <div className="product-card">
          <img src={props.img} alt="image" className="prod-img" />
          <div className="prod-details">
            <h4>{props.pname}</h4>
            <p className="prod-desp">{props.desp}</p>
            <p className="price">₹{props.price}</p>
          </div>
          {/* <div className="Q-controls">
          {quantity>0? (

          ):( */}

          <button type="button" className="add-to-cart">
            Add to cart
          </button>
        {/* )}; */}
          </div>
         
        </div>
      {/* </div> */}
      </>
  );
}

export default Product;
