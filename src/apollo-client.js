import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

const httpLink = createHttpLink({
  uri: "http://your-api-endpoint.com/graphql", // Replace with your actual GraphQL endpoint
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client

