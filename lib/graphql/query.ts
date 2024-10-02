import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      price
      description
      images {
        id
        url
        fileName
        height
        width
      }

    }
  }
`;

export { GET_PRODUCTS };
