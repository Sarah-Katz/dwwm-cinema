import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../contact/Contact";
import './header.css'

export default function Header() {
    const [isVisible, setVisible] = useState(false);

    const handleVisible = (value) => {
        setVisible(value);
    };

    const toggleVisible = () => {
        if (isVisible) {
            handleVisible(false);
        } else {
            handleVisible(true);
        }
    };

    return (
        <header>
            <img src="/images/logo/logo.jpg" alt="Logo du cinéma" />
            <nav>
                <Link className="header-link" to="/">Accueil</Link>
                <Link className="header-link" to="/menuFilm">Films à l'affiche</Link>
                <Link className="header-link" to="/menuActeur">Acteurs du moment</Link>
                <button className="header-link" id="contact-link" onClick={toggleVisible}>Nous contacter</button>
            </nav>
            <Contact isVisible={isVisible} toggleVisible={toggleVisible} />
        </header>
    )
}