import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Oğuz</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/oguzz0804/" className="footer__social-link">
                        <i class="bx bxl-instagram-alt"></i>
                    </a>
                    <a href="https://github.com/oguzz0804" className="footer__social-link">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">Oğuzhan ÖTLEŞ</span>
            </div>
        </footer>
    )
}

export default Footer