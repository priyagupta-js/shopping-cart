import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";  
import DisplayProduct from "./Pages/DisplayProduct";
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      {/* <Login /> */}
      <Route path="/" element={<Homepage />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="account" element={<Account />}/>
      <Route path="cart" element={<Cart />} />
      <Route path="displayproduct" element={<DisplayProduct />}/>
      </Routes>
    </BrowserRouter>
    <Homepage />
  );
}

export default App;
