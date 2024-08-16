import React, { useContext } from 'react'
import { Theme } from '../../context/themeContext'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import "./Home.css"
// import image from '../../assets/imgs/img-1-header.jpg';
// import image1 from '../../assets/imgs/programmeren-1.png';
// import image2 from '../../assets/imgs/web technologie-1.png' ; 
// import image3 from '../../assets/imgs/web technologie-2.png' ; 
// import image4 from '../../assets/imgs/saif-portfolio.png' ;
// import team1 from '../../assets/imgs/philippe de pauw.webp' ;
// import team2 from '../../assets/imgs/adriaan-gilbert.jpeg';
// import team3 from '../../assets/imgs/Evelien.webp';
// import team4 from '../../assets/imgs/wachem.png';
  import { useQuery } from '@apollo/client'
import GETHOME from '../../graphql/Home'
import ServiceSection from '../../Components/Service/service'
import { Helmet } from 'react-helmet'

const Home = () => {
  const [theme , setTheme] = useContext(Theme);
  const {loading , error , data} = useQuery(GETHOME);
  if (loading) return <p style={{
      textAlign : "center" ,
      padding : "50vh 0" , 
      fontWeight : "bold"
  }}>loading...</p> ; 
  if (error) return <p>Error :(</p>;
  return (
    <div className='Home'>
         <Helmet>
        <title>Home | Graduaat Programmeren</title>
      </Helmet>
        <Navbar className={`header ${theme}`}/>     
      <div className='content'>
        <div className='hero-image'>
          <div className='hero-image-content'>
            <h1>{data.hero_image[0].section}</h1>
            <p>{data.hero_image[1].section}</p>
            <a href="#opleiding">{ data.hero_image[2].section }</a>
          </div>
          <div className='hero-image-img'>
            {<img src={require(`../../assets/imgs/${data.hero_image[0].img}`)} alt='Afbeelding van programmeren'/>}
          </div>
        </div>
        
        <section id="opleiding" className="section-opleiding">
            <div className="container">
                <h2>{data.opleading[0].section}</h2>
                <p>{data.opleading[1].section}</p>
                <p>{data.opleading[2].section}</p>
            </div>
        </section>
        
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

        <section className='section-blog'>
        <div className="container">
                <h2>{data.blog[0].title}</h2>
                <h3>{data.blog[1].title}</h3>
                <p>{data.blog[1].description}</p>
                <h4>{data.blog[2].title}</h4>
                <p>{data.blog[2].description}</p>
                <h4>{data.blog[3].title}</h4>
                <p>{data.blog[3].description}</p>
                <h4>{data.blog[4].title}</h4>
                <p>{data.blog[4].description}</p>
            </div>
        </section>

        <ServiceSection/>

      </div>
        <Footer className="footer"/>
    </div>
  )
}

export default Home
