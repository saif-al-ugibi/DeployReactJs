import { gql } from '@apollo/client';

const GETBLOG = gql`
  query GETDATA {
  
  blog{
      id
      title
      description
    }

  }
`;

export default GETBLOG ; 