// const Headers = ()=>{
//     return <div>Header</div>
// }
// export default Headers

import React, { useState, useEffect } from "react";
import './Headers.css';
import { CSSTransition } from "react-transition-group";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';




// import logo from '../picture/cover.jpg'



export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // 
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
      
        const handleChange = (event) => {
          handleMediaQueryChange(event);
        };
      
        mediaQuery.addEventListener("change", handleChange);
        handleMediaQueryChange(mediaQuery);
      
        return () => {
          mediaQuery.removeEventListener("change", handleChange);
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
                    <ScrollLink to="Start" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">首頁</ScrollLink>
                    <ScrollLink to="Works" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">系列作品</ScrollLink>
                    <ScrollLink to="About" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">關於作者Jane</ScrollLink>
                    <RouterLink to="cart" spy={true} smooth={true} offset={-100} onClick={toggleNav} class="menu-link">購物車</RouterLink>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Menu">
                <i className='fa fa-bars'></i>
            </button>
        </header>
    );
}