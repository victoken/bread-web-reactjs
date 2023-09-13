// const Headers = ()=>{
//     return <div>Header</div>
// }
// export default Headers

import React, { useState, useEffect } from "react";
import './Headers.css';
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom';
// import logo from '../picture/cover.jpg'



export default function Header() {
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
        <header className="Header">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    {/* <Link activeClass="active" to="" onClick={toggleNav} spy={true} smooth={true} class="menu-link">Home</Link> */}
                    <Link to="Start" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">首頁</Link>
                    <Link to="Works" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">系列作品</Link>
                    <Link to="About" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">關於作者Jane</Link>
                    <Link to="Cart" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">購物車</Link>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button>
        </header>
    );
}