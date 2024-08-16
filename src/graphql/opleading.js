import { gql } from '@apollo/client';

const GETOPLEADING = gql`
  query GETDATA {
   

    opleading{
      id
      section
      }

  }
`;

export default GETOPLEADING ; 