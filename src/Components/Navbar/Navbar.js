import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo_white from '../../assets/HeaderIcon/logo-black.png' 
import logo_dark from '../../assets/HeaderIcon/logo-white.png'
import search_icon_light from '../../assets/HeaderIcon/search-w.png'  
import search_icon_dark from '../../assets/HeaderIcon/search-b.png'
import toggle_light from '../../assets/HeaderIcon/night.png'
import toggle_dark from '../../assets/HeaderIcon/day.png'  
import { Theme } from '../../context/themeContext'
import { Link , useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const valueInput = useRef(null);
  const valueInput2 = useRef(null);
  const [theme , setTheme] = useContext(Theme);
    const toggle = ()=>{
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    const [open , setOpen] = useState(false);
    const makeOpen = ()=>{
        open ? setOpen(false) : setOpen(true);
    }

    const handleClick = ()=>{
      navigate(`/${valueInput.current.value}`);
    }
  return (
      <header className='navbar'>
      <img src={theme === "light" ? logo_white : logo_dark} alt='logo' className='logo' onClick={()=>navigate("/")}/>
        <ul>
            <Link to="/" className='link-router'><li>Home</li></Link>
            <Link to="/opleiding" className='link-router'><li>Opleiding</li></Link>
            <Link to="/portfolio" className='link-router'><li>Portfolio</li></Link>
            <Link to="/blog" className='link-router'><li>Blog</li></Link>
            <Link to="/services" className='link-router'><li>Services</li></Link>
            <Link to="/team" className='link-router'><li>Team</li></Link>
        </ul>

        <form className='search-box' onSubmit={handleClick}>
            <input type='text' placeholder='Search...' ref={valueInput}/>
            <img src={theme === "light" ? search_icon_light : search_icon_dark} alt='search' onClick={handleClick}/>
        </form>

        <img src={theme === "light" ? toggle_light : toggle_dark} alt='toggle-icon' className='toggle-icon' onClick={toggle}/>

      <div className='viewMobile'>
      <img src={theme === "light" ? logo_white : logo_dark} alt='logo' className='logo' onClick={()=>navigate("/")}/>
        <ul style={{display : open?"block" : "none"}}>
        <Link to="/" className='link-router'><li>Home</li></Link>
            <Link to="/opleiding" className='link-router'><li>Opleiding</li></Link>
            <Link to="/portfolio" className='link-router'><li>Portfolio</li></Link>
            <Link to="/blog" className='link-router'><li>Blog</li></Link>
            <Link to="/services" className='link-router'><li>Services</li></Link>
            <Link to="/team" className='link-router'><li>Team</li></Link>
        </ul>

        <form className='search-box' style={{display : open?"block" : "none"}} onSubmit={()=>{
          navigate(`/${valueInput2.current.value}`);
        }}>
            <input type='text' placeholder='Search...' ref={valueInput2}/>
            <img src={theme === "light" ? search_icon_light : search_icon_dark} alt='search' onClick={()=>{
              navigate(`/${valueInput2.current.value}`);
            }}/>
        </form>

        <img src={theme === "light" ? toggle_light : toggle_dark} alt='toggle-icon' style={{display : open?"block" : "none"}} className='toggle-icon' onClick={toggle}/>
      </div>
        <span className="material-symbols-outlined menu" onClick={makeOpen}> {open ? "close" : "menu"} </span>
    </header>
  )
}

export default Navbar
