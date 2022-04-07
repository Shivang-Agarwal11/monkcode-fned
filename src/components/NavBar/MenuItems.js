import { MdAccountCircle } from "react-icons/md";
import React from "react";
import { NavLink } from "react-router-dom";
export const MenuItems = [
    {
        name: 'Home',
        url: "/",
        cname: 'nav-links'
    },
    {
        name: 'Discuss',
        url: '/discuss',
        cname: 'nav-links'
    },
    {
        name: 'Contact Us',
        url: '/contact',
        cname: 'nav-links'
    },
    {
        name: <MdAccountCircle size={25}/>,
        url: '#',
        cname: 'nav-links'
    },
]