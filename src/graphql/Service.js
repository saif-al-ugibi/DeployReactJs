import { gql } from '@apollo/client';

const GETServices = gql`
  query GETSERVICES {
   services{
  id
  title
  description
}

  }
`;

export default GETServices ; 