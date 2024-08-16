import { gql } from '@apollo/client';

const GETPORTFOLIO = gql`
  query GETDATA {
  
    portfolio{
     id
     section
  }
    portfolio_cards{
    id 
    title 
    description
    img
    alt
    link
  }

  }
`;

export default GETPORTFOLIO ; 