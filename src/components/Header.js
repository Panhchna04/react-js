import React from 'react';
import { Link, NavLink } from 'react-router';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function Header() {
    const { cartCount } = useContext(CartContext);
  return (
    <div>
               <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Furni<span>.</span></NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/" 
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/products"
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/about"
                            >
                                About us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/services"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/blog"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/contact"
                            >
                                Contact us
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li className="nav-item">
                            <Link className="nav-link" to="#"><img src="images/user.svg" alt="User"/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><img src="images/cart.svg" alt="Cart"/><span style={{color:'white', marginLeft:'5px'}}>{cartCount}</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Header
