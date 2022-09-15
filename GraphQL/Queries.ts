import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  query {
    blogPostsCollection {
      items {
        title
      }
    }
  }
`;

export const LOAD_SLIDER = gql`
  query {
    sliderCollection {
      items {
        title
        image
        description
      }
    }
  }
`;
