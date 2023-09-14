import React, { useState, useEffect } from "react";
import './Otherheader.css';
import { CSSTransition } from "react-transition-group";
import { Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// import logo from '../picture/cover.jpg'



export default function Otherheader() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Otherheader">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    {/* <Link activeClass="active" to="" onClick={toggleNav} spy={true} smooth={true} class="menu-link">Home</Link> */}
                    <RouterLink to="App" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">首頁</RouterLink>
                    <RouterLink to="cart" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">購物車</RouterLink>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button>
        </header>
    );
}