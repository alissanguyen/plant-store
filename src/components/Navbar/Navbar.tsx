import * as React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu } from "@mui/material"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.svg"
import { CartData } from '../../types';

interface Props {
    cart: CartData | null | undefined
}

const NavLinks = [{
    id: "#Home",
    name: "Home",
    url: "/"
}, {
    id: "#Shop",
    name: "Shop",
    url: "/shop"
}, {
    id: "#AboutUs",
    name: "About Us",
    url: "/aboutus"
}, {
    id: "#Reviews",
    name: "Reviews",
    url: "/reviews"
}, {
    id: "#FAQ",
    name: "FAQ",
    url: "/faq"
}]

const Navbar: React.FC<Props> = (props) => {
    const location = useLocation();

    return (
        <nav>
            <div className="AppBar shadow-none bg-transparent flex flex-row justify-between items-center py-5 px-[10%] w-full">
                <div className="Navbar__Logo text-2xl flex-grow-1 flex items-center">
                    <img src={Logo} height="25px" className='mr-2' alt="" />
                    <span className="uppercase">Alissa's Garden</span>
                </div>
                <div className="w-1/2 flex flex-row justify-between text-lg z-10">
                    {NavLinks.map((link) => (<NavLink to={`${link.url}`} className="hover:text-emerald-700 ease-in-out duration-75">{link.name}</NavLink>))}
                </div>
                {!location.pathname.startsWith("/cart") ? (<div className="mr-10">
                    <Link to={`cart/${props.cart ? props.cart.id : ""}`}>
                        <IconButton aria-label="View Cart">
                            <Badge badgeContent={props.cart ? props.cart.totalItems : 0} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>) : null}

            </div>
        </nav>
    )
}

export default Navbar