import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const queryLink = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

const link = from([
  new HttpLink({
    uri: queryLink,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
    },
  }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
