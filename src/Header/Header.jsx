import React, { Component} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterestP, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default class Header extends Component {
    state = {
        lang: "rus"
    }

    handleLang = (e) => {
        e.preventDefault();
        this.setState({ lang: e.target.id})
    }
    render() {
        let rus = "lang chosen";
        let eng = "lang";
        if (this.state.lang === "rus") {
            rus = "lang chosen";
            eng =  "lang";
        }
        else if (this.state.lang === "eng") {
            eng = "lang chosen";
            rus = "lang";
        }
        return (
            <div className="header">
                <div className="top-bar">
                    <div className="social">
                        <a href="/" alt=""><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="/" alt=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="/" alt=""><FontAwesomeIcon icon={faPinterestP} /></a>
                    </div>
                    <div className="logo">
                        <img src="/imgs/SvgjsPath1007.svg" alt="" /> 
                    </div>
                    <div className="lang">
                        <a href="/" alt="" id="rus" className={rus} onClick={this.handleLang}>РУС</a>
                        <a href="/" alt="" id="eng" className={eng} onClick={this.handleLang}>ENG</a>
                    </div>
                </div>
                <div className="nav-bar">
                    <a href="/" alt="">О СТУДИИ</a>
                    <h6>•</h6>
                    <a href="/" alt="">ПОРТФОЛИО</a>
                    <h6>•</h6>
                    <a href="/" alt="">ЭТАПЫ РАБОТЫ</a>
                    <h6>•</h6>
                    <a href="/" alt="">СТОИМОСТЬ</a>
                    <h6>•</h6>
                    <a href="/" alt="">ЭКО-МАТЕРИАЛЫ</a>
                    <h6>•</h6>
                    <a href="/" alt="">КОНТАКТЫ</a>
                </div>
            </div>
        );
    }
}

