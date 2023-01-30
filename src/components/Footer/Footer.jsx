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
                <img src={iconGmail} alt="gmail icon" className="icon-gmail"/>
                <img src={iconLinkedin} alt="Linkedin icon" className="icon-linkedin"/>
            </div>
        </footer>
    )
}

export default Footer