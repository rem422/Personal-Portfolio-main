import React from 'react';
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs';

const headerSocials = () => {
    return (
    <div className='header__social'>
        <a href="http://linkedin.com" target={"_blank"}>
            <BsLinkedin />
        </a>
        <a href="http://github.com" target={"_blank"}>
            <BsGithub />
        </a>
        <a href="http://dribbble.com" target={"_blank"}>
            <BsDribbble />
        </a>
    </div>
    );
};

export default headerSocials;