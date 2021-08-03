import React from 'react';
import '../../App.css';

// icons for contact / sites
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FaStackOverflow } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <p>Designed and Bulit by Michelle Gleave</p>
            <a href='https://www.linkedin.com/in/michelle-gleave-470bb9161/'><FaLinkedin color='white' size={30}/></a>
            <a href='http://www.github.com/mmgleave'><AiFillGithub color='white' size={30}/></a>
            <a href='http://www.instagram.com/mishkab0b'><IoLogoInstagram color='white' size={30}/></a>
            <a href='https://stackoverflow.com/users/16574052/michelle-gleave'><FaStackOverflow color='white' size={30}/></a>
        </div>
    )
};

export default Footer;

