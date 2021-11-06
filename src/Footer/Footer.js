import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterestP, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="social">
                <a href="/" alt=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="/" alt=""><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="/" alt=""><FontAwesomeIcon icon={faPinterestP} /></a>
            </div>
            <div className="slogan">
                <h5>•</h5>
                <h3>© We-Art. Все права защищены.</h3>
                <h5>•</h5>
            </div>
            <div className="logo">
                <img src="/imgs/logo.png" alt="" />
            </div>
        </div>
    );
}
