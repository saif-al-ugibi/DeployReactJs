import React ,{ useContext } from 'react'
import { Theme } from '../../context/themeContext'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet' ; 
import { useQuery } from '@apollo/client'
import GETBLOG from '../../graphql/blog';
const Blog = () => {
    const [theme , setTheme] = useContext(Theme);
    const {loading , error , data} = useQuery(GETBLOG);
    if (loading) return <p style={{
      textAlign : "center" ,
      padding : "50vh 0" , 
      fontWeight : "bold"
  }}>loading...</p> ; 
  if (error) return <p>Error :(</p>;
  return (
    <div className='Blog'>
          <Helmet>
        <title>Blog | Graduaat Programmeren</title>
      </Helmet>
        <Navbar className={`header ${theme}`}/>
        <div className='content'>
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
        </div>
        <Footer className="footer"/>
    </div>
  )
}

export default Blog
