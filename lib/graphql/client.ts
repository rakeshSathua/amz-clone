import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://ap-south-1.cdn.hygraph.com/content/cm1gsm4w701dc08w17qhmcovi/master",
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
});

export default client;
