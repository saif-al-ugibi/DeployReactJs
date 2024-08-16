import { gql } from '@apollo/client';

const GETTEAM = gql`
  query GETTEAM {
   	team{
    id
    title
    description
    img
    alt
  }

  }
`;

export default GETTEAM ; 