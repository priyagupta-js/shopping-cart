import React from "react";
import { BrowserRouter,Routes,Route , Navigate} from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import About from "../src/Pages/About.jsx";
import Contact from "../src/Pages/Contact.jsx";
import Account from "./Pages/Account.jsx";
import Cart from "./Pages/Cart.jsx";
import SignUp from "./Pages/SignUp.jsx"; 
import Login from "./Pages/Login.jsx";  
import DisplayProduct from "./Pages/DisplayProduct.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/home" element={<Homepage />}/>
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
