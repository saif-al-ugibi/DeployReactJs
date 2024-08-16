import React, { useContext } from 'react'
import { Theme } from '../../context/themeContext'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import { useQuery } from '@apollo/client'
import GETServices from '../../graphql/Service'
import { Helmet } from 'react-helmet'
const Services = () => {
    const [theme , setTheme] = useContext(Theme);
    const {loading , error , data} = useQuery(GETServices);
    if (loading) return <p style={{
        textAlign : "center" ,
        padding : "50vh 0" , 
        fontWeight : "bold"
    }}>loading...</p> ; 
    if (error) return <p>Error :(</p>;
  return (
    <div className='Services'>
      <Helmet>
        <title>Services | Graduaat Programmeren</title>
      </Helmet>
        <Navbar className={`header ${theme}`}/>
        <div className='content'>
        <section className='section-services'>
            <div className='container'>
              <h2>{data.services[0].title}</h2>
                <p>{data.services[0].description}</p>
                <h3>{data.services[1].title}</h3>
                <p>{data.services[1].description}</p>
                
                <h3>{data.services[2].title}</h3>
                <p>{data.services[2].description}</p>
                
                <h3>{data.services[3].title}</h3>
                <p>{data.services[3].description}</p>
                
                <h3>{data.services[4].title}</h3>
                <p>{data.services[4].description}</p>
            </div>
        </section>
        </div>
        <Footer className="footer"/>
    </div>
  )
}

export default Services
