import React, { useContext, useState } from 'react';
import './Navbar.css';
import logoNew from '../Assets/Logo.png'; // Importing the new logo image
import cart_icon from "../Assets/cart.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className="nav-logo-container">
                <img src={logoNew} alt="Logo" className='logo' />
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>  {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button> Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className='cart' /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
