import React, { useContext } from 'react'
import { Theme } from '../../context/themeContext'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet'
import './Opleiding.css'
import { useQuery } from '@apollo/client'
import GETOPLEADING from '../../graphql/opleading'
const Opleiding = () => {
    const [theme ] = useContext(Theme);
    const {loading , error , data} = useQuery(GETOPLEADING);
    if (loading) return <p style={{
      textAlign : "center" ,
      padding : "50vh 0" , 
      fontWeight : "bold"
  }}>loading...</p> ; 
  if (error) return <p>Error :(</p>;
    return (
      <div className='Opleiding'>
          <Helmet>
        <title>Opleiding | Graduaat Programmeren</title>
      </Helmet>
          <Navbar className={`header ${theme}`}/>
         <div className='content'>
         <section id="opleiding" className="section-opleiding">
            <div className="container">
                <h2>{data.opleading[0].section}</h2>
                <p>{data.opleading[1].section}</p>
                <p>{data.opleading[2].section}</p>
            </div>
        </section>
          </div>
          <Footer className="footer"/>
      </div>
    )
}

export default Opleiding
