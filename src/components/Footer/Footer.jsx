import React from "react";
import iconGmail from '../../Img/icons-gmail.png';
import iconLinkedin from '../../Img/icons-linkedin.png'
const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer_text">
                <p className="footer_text-p"> &copy; 2023 Memories - Noe Sola </p>
            </div>
            <div className="footer_links">
                <a href="mailto:noemisolac@gmail.com"><img src={iconGmail} alt="gmail icon" className="icon-gmail"/></a>
                <a href="https://www.linkedin.com/in/noe-sola/" target="_blank" rel="noreferrer"><img src={iconLinkedin} alt="Linkedin icon" className="icon-linkedin"/></a>
            </div>
        </footer>
    )
}

export default Footer