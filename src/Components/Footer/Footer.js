import React from 'react'
import "./Footer.css"
//import { Theme } from '../../context/themeContext'
import facebook from "../../assets/socialMedia/facebook.svg"
import twitter from "../../assets/socialMedia/twitter.svg"
import linkedin from "../../assets/socialMedia/LinkedIn.svg"
import instagram from "../../assets/socialMedia/Instagram.svg"

const Footer = () => {
  //const [theme , setTheme] = useContext(Theme);
  return (
    <footer>
        <div className='Up'>
        <div className='footer-firstSection'>
            <h3>Adres</h3>
            <p>Leeuwstraat 1, 9000 Gent, België</p>
        </div>
        <div className='footer-secondSection'>
            <h3>Contact</h3>
            <p>Telefoon: +32 (0)9 234 90 00 </p>
            <p>E-mail: info@arteveldehs.be</p>
        </div>
        <div className='footer-thirdSection'>
            <h3>Openingstijden</h3>
            <p>Maandag - Vrijdag: 9:00 - 17:00</p>
        </div>
        <div className='footer-fourthSection'>
            <h3>Social media</h3>
            <a href='https://www.facebook.com/arteveldehogeschool/' target='blank'>
                <img src={facebook} width="25px" alt='facebook'/>
            </a>
            <a href='https://x.com/arteveldehs' target='blank'>
                <img src={twitter} width="25px" alt='Twitter'/>
            </a>
            <a href='https://www.linkedin.com/school/arteveldehogeschool/' target='blank'>
                <img src={linkedin} width="25px" alt='linkedin'/>
            </a>
            <a href='https://www.instagram.com/arteveldehogeschool/' target='blank'>
                <img src={instagram} width="25px" alt='instagram'/>
            </a>
        </div>
        </div>
        <div className='Down'>
        <p>&copy; 2024 Graduaat Programmeren. Alle rechten voorbehouden.</p>
        </div>
    </footer>
  )
}

export default Footer
