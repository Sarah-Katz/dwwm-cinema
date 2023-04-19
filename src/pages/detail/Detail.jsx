import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import './detail.css'

function Detail() {
    const location = useLocation();
    const item = location.state;
    const [reserv, setReserv] = useState(false);

    const handleClick = () => {
        setReserv(!reserv);
    }

    return (
        <>
            <article className='item-detail'>
                <h2 className='item-title'>{item.title}</h2>
                <p class='item-infos'>{item.infos}</p>
                {/* Affichage conditionnel pour les films */}
                {item.isFilm &&
                    <>
                        <div className="item-small-infos">
                            <p className="item-genre">Genre : {item.genre}</p>
                            <p className='item-duree'>Durée : {item.duree}</p>
                        </div>
                        <button className='item-button' onClick={handleClick}>Reservez votre séance</button>
                    </>}
            </article>
            {/* Modal de réservation de séance */}
            {reserv &&
                <div className="item-reserv">
                    <div className='reserv-background'>
                        <div className="reserv-container">
                            <button onClick={handleClick} id="contact-close-button" className='contact-close-button'><ImCross /></button>
                            <button className="reserv-button">14h30</button>
                            <button className="reserv-button">17h00</button>
                            <button className="reserv-button">20h00</button>
                        </div>
                    </div>
                </div>}
            <img src={item.src} alt={item.alt} className="detail-background" />
        </>
    );
}

export default Detail;
