import { BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import DisplayProduct from "./Pages/DisplayProduct";
function App() {
  

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
