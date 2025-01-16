import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbZoom } from "react-icons/tb";
import { useState } from "react";

function Navabar()
{

    const [count,setCount] =useState(0);

    return(
        <>
        <div className="nav">
            <div className="nav-left">
                <div className="logo">Navbar</div>
            </div>
            <div className="nav-right">
            <div className="search-bar">
                <TbZoom />
                <input type="text" placeholder="Search..." />
            </div>
               <FaUser size={20}/>
               <div className="cart-icon">
                <span><IoCartSharp size={25}/></span>
                <span className="badge">{count}</span>
               </div>
            </div>
        </div>
        </>
    );
}

export default Navabar;