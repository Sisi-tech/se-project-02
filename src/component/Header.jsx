import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import SignIn from './SignIn';


function Header() {
    const [showSignIn, setShowSignIn] = useState(false);
    const toggleSignInForm = () => {
        setShowSignIn(!showSignIn);
    };
    const closeSignInForm = () => {
        setShowSignIn(false);
    };

    return (
        <div className='text-end pb-10'>
            <button onClick={toggleSignInForm}>
                {showSignIn ? <FontAwesomeIcon icon={faTimes} /> : 'Sign In'}
            </button>
            {showSignIn && <SignIn onClose={closeSignInForm} />}
        </div>

    )
};

export default Header;