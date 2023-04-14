import './contact.css'
import { FaArrowCircleRight } from 'react-icons/fa';
import Form from "../form/Form"

export default function Contact({ isVisible, toggleVisible }) {

    if (isVisible) {
        return (
            <div id="contact-container" className="contact-container active">
                <button onClick={toggleVisible} id="contact-close-button" className='contact-close-button'><FaArrowCircleRight /></button>
                <Form />
            </div>
        )
    } else {
        return (
            <div id="contact-container" className="contact-container">
                <button onClick={toggleVisible} id="contact-close-button" className='contact-close-button'><FaArrowCircleRight /></button>
                <Form />
            </div>
        )
    }
}