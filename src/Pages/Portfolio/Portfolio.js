import React, { useContext } from 'react'
import { Theme } from '../../context/themeContext'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import { useQuery } from '@apollo/client'
import GETPORTFOLIO from '../../graphql/portfolio';
import { Helmet } from 'react-helmet';
const Portfolio = () => {
    const [theme] = useContext(Theme);
    const {loading , error , data} = useQuery(GETPORTFOLIO);
    if (loading) return <p style={{
      textAlign : "center" ,
      padding : "50vh 0" , 
      fontWeight : "bold"
  }}>loading...</p> ; 
  if (error) return <p>Error :(</p>;
    return (
      <div className='Portfolio'>
           <Helmet>
        <title>Portfolio | Graduaat Programmeren</title>
      </Helmet>
          <Navbar className={`header ${theme}`}/>
          <div className='content'>
          <section className='section-portfolio'>
          <div className='container'>
            <h2>{data.portfolio[0].section}</h2>
            <p>{data.portfolio[1].section}</p>
            <div className='cards-portfolio'>
              {
                data.portfolio_cards.map(card =>{
                  return(
                  <div className='card' key={card.id}>
                      <a href={card.link}>
                      <img src={require(`../../assets/imgs/${card.img}`)} alt={card.alt}/>
                      <div className='card-info'>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                      </a>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </section>
          </div>
          <Footer className="footer"/>
      </div>
    )
}

export default Portfolio
