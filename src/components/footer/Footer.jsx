import React from "react";

export default function Footer() {
    return (
        <footer>
            <a className="footer-rgpd" href="/">Mentions légales</a>
            <span className="footer-text">Retrouvez nous sur </span>
            <a className="footer-link" href="https://www.facebook.com/cinamand/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook footer-icon"></i></a>
            <a className="footer-link" href="https://www.instagram.com/cinamand/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram footer-icon"></i></a>
        </footer>
    )
}