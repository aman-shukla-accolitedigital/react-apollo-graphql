import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://pnrnorwtprafpayjro4lnfao3y.appsync-api.us-east-1.amazonaws.com/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
  headers: {
    "x-api-key": "da2-xliwhc2or5hdnookeuiww564ey",
  }
});
export default client;
