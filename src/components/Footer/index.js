import React from 'react';
import '../../App.css';
import gitHubImg from '../../assets/images/GitHub-Mark-Light-64px.png';
import linkedInImg from '../../assets/images/linkedin.png' 

function Footer() {
    return (
        <div className="footer">
            <p>Designed and Built by Michelle Gleave</p>
            <a href="http://www.github.com">
            <img src={gitHubImg}/></a>
            <a href="http://www.linkedin.com">
            <img src={linkedInImg}/></a>
        </div>
    )
};

export default Footer;

