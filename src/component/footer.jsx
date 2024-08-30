import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div className='bg-pink-50 w-full h-[140px] mt-20 flex justify-center items-center gap-10'>
            <a href="https://wwww.instagram.com" target="_blank" >
                <FontAwesomeIcon icon={faInstagram} size="2x" className='hover:shadow-md' />
            </a>
            <a href="https.//www.facebook.com" target="_blank" rel="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" className='hover:shadow-md' />
            </a>
            <a href="mailto: example@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className='hover:shadow-md' />
            </a>
            <a href="https.//www.twitter.com" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" className='hover:shadow-md' />
            </a>
        </div>
    )
}

export default Footer;