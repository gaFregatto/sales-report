/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function NavBar(props: any){
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props: any){
    return (
        <li className="nav-item">
            <a href="#" className="icon-button">
                {props.img}
                {props.icon}
            </a>
        </li>
    );
}

export { NavBar, NavItem };
