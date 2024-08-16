import { gql } from '@apollo/client';

const GETHOME = gql`
  query GETHERO {
    hero_image {
      id
      section
      img
    }

    opleading{
      id
      section
      }

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

  blog{
      id
      title
      description
    }

  }
`;

export default GETHOME ; 