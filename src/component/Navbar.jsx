import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isSmallScreen ? (
                <ul className='flex lg:flex-col gap-4 text-xl text-start pl-6 pt-6'>
                    <li><a href="home">Home</a></li>
                    <li><a href="sigIn">Sign In</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>   
            ) : (
                <div>
                    <nav className='text-start pl-8 pt-8'>
                        <FontAwesomeIcon 
                            icon={faBars} 
                            size="2x" 
                            onClick={toggleMenu}
                            className='cursor-pointer'
                        />
                    </nav>
                    {isMenuOpen && (
                        <ul className='flex lg:flex-col gap-4 text-lg text-start pl-8 pt-6'>
                            <li><a href="home">Home</a></li>
                            <li><a href="cart">Cart</a></li>
                            <li><a href="sigIn">Sign In</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

export default Navbar;