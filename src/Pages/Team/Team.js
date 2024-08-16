import React, { useContext } from 'react'
import { Theme } from '../../context/themeContext'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import GETTEAM from '../../graphql/team';

const Team = () => {
    const [theme ] = useContext(Theme);
    const {loading , error , data} = useQuery(GETTEAM);
    if (loading) return <p style={{
        textAlign : "center" ,
        padding : "50vh 0" , 
        fontWeight : "bold"
    }}>loading...</p> ; 
    if (error) return <p>Error :(</p>;
  return (
    <div className='Team'>
      <Helmet>
        <title>Team | Graduaat Programmeren</title>
      </Helmet>
        <Navbar className={`header ${theme}`}/>
      <div className='content'>
      <section className='section-team'>
          <div className='container'>
           <h2>Ons Team</h2>
          <div className='team-members'>
            {
              data.team.map(card=>{
                return(
                  <div className='team-member' key={card.id}>
                <img src={require(`../../assets/imgs/${card.img}`)} alt={card.alt}/>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
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

export default Team
