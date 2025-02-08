import Navbar from "../Components/Navbar.js";
import PImg from "../Assests/facecream.png";
// import product from "../productlist";
function DisplayProduct ()
{
return(
    <>
    <Navbar />
        <div className="section">
            <div className="img-section">
                <img className="prod-image"src={PImg} alt="..."/>
            </div>
            <div className="details-section">
                <h3>Product name</h3>
                <div className="P-descrp">description</div>
                <div className="rating">Rating</div>
                <hr />
                <div className="price">Price</div>
                <hr />
                <div className="addToCart">
                    Add-to-cart features
                </div>
            </div>
        </div>
    </>
);
}
export default DisplayProduct;