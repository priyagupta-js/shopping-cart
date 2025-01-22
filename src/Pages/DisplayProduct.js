import Navabar from "../Components/Navbar";
import PImg from "../Assests/facecream.png";
import product from "../productlist";
function DisplayProduct ()
{
return(
    <>
    <Navabar />
        <div className="section">
            <div className="img-section">
                <img className="prod-img"src={PImg} alt="..."/>
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