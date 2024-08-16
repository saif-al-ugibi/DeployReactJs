import React, { useContext } from 'react'
import { Theme } from '../../context/themeContext'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import "./Error.css"
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Error = () => {
    const [theme , setTheme] = useContext(Theme);
    const navigate = useNavigate();
  return (
    <div className='Error'>
      <Helmet>
        <title>Error | Graduaat Programmeren</title>
      </Helmet>
      <Navbar className={`header ${theme}`}/>
      <div className='content'>
          <div className='four_zero_bg'></div>
          <div className='inner-Text'>
          <h3>Are you lost ?</h3>
          <button onClick={()=> navigate("/")}>Go To Home</button>
          </div>
      </div>
      <Footer className="footer"/>
    </div>
  )
}

export default Error
