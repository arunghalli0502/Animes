import { Link } from 'react-router-dom';
import foodlogo  from '../tomj.png'
import { useState } from "react";

const Navbar = () => {
let[searchKey, setSearchKey]=useState("")


    return ( 
            <nav>
                <div className='logo'>
                <Link to="/">
                    <img src={foodlogo} alt="logo" />
                </Link>
                <h1> <span className='A'>&#119983;</span>he <span className='A'>&#120074;</span>rate <span className='A'>&#10671;</span>nimes </h1>
                </div>
                <div className="searchbar">
                    <input type="search" value={searchKey} onChange={ (e)=>{setSearchKey(e.target.value);}  }/>
                    <Link to={`/search${searchKey}`}><button> search </button></Link>
                </div>
                <div className='nava'>
                    <Link to="/addanimes"> Upload</Link>
                    {/* <Link to="/orders">Your Orders</Link> */}
                </div>
            </nav>
           );
}
 
export default Navbar;