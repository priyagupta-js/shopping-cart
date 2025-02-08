import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import About from "../src/Pages/About.jsx";
import Contact from "../src/Pages/Contact.jsx";
import Account from "./Pages/Account.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login";  
import DisplayProduct from "./Pages/DisplayProduct.js";
console.log("App.js file is being loaded...");
function App() {
  
  console.log("Hello world");

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="account" element={<Account />}/>
      <Route path="cart" element={<Cart />} />
      <Route path="displayproduct" element={<DisplayProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
