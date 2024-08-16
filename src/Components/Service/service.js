import GETServices from '../../graphql/Service';
import { useQuery } from '@apollo/client';
function ServiceSection(){
    const {loading , error , data} = useQuery(GETServices);
    if (loading) return <p style={{
        textAlign : "center" ,
        padding : "50vh 0" , 
        fontWeight : "bold"
    }}>loading...</p> ; 
    if (error) return <p>Error :(</p>;
    return(
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
    )
}

export default ServiceSection ; 