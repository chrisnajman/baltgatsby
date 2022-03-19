import { ApolloClient, HttpLink } from "@apollo/client"
import { InMemoryCache } from "@apollo/client/cache"

const cache = new InMemoryCache()
export const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://gatsbywp3.local/graphql",
  }),
})
