import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbZoom } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import "../styles.css";

function Navabar()
{

    const [count,setCount] =useState(0);

    function handleClick()
    {
        console.log('hello world');
    }
    
    return(
        <div className="nav">
            <div className="nav-left">
                <div className="logo">Navbar</div>
            </div>
            <div className="nav-right">
            <Link to="/" className="navlink"><div className="home">Home</div></Link>
            <Link to="/about" className="navlink"><div className="about">About Us</div></Link>
            <Link to="/contact"  className="navlink"><div className="contact">Contact Us</div></Link>
            <div className="search-bar">
                <TbZoom />
                <input type="text" placeholder="Search..." />
            </div>
            <Link to="/account" className="navlink"><FaUser size={20}/></Link>
            <div className="cart-icon">
            <Link to="/cart" className="navlink"><span><IoCartSharp size={25}/></span></Link>
            <span className="badge">{count}</span>
            </div>
            </div>
            <div className="burger" onClick={handleClick}>
                <CiMenuBurger />
            </div>
        </div>
    );
}

export default Navabar;