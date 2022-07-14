import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';
import { useRef } from 'react';

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV series',
        path: '/tv',
    },
];

function Header() {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex((e) => e.path === pathname);
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <img src={logo} alt="" />
                <Link to="/">vMovies</Link>
            </div>

            <ul className="header__nav">
                {headerNav.map((item, index) => {
                    return (
                        <li key={index} className={index === active ? 'active' : ''}>
                            <Link to={item.path}>{item.display}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Header;
