import {  useEffect, useState } from "react";
import { Theme } from "./context/themeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Opleiding from "./Pages/Opleiding/Opleiding";
import Services from "./Pages/Services/Services";
import Team from "./Pages/Team/Team";
import Error from "./Pages/Error/Error";


function App() {
  // const photo = "image.png" ; 
  // const Image = require(`./assets/${photo}`) ; 
  const current_theme = localStorage.getItem("theme");
  const [theme , setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(()=>{
    localStorage.setItem("theme" , theme);
  },[theme])
  return (
    <div className={`container ${theme}`}>
    <Theme.Provider value={[theme , setTheme]}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="opleiding" element={<Opleiding/>}/>
            <Route path="services" element={<Services/>} />
            <Route path="team" element={<Team/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </BrowserRouter>
    </Theme.Provider>
    </div>

  );
}

export default App;
