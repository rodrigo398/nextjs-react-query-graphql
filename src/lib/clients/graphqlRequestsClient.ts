import { GraphQLClient } from 'graphql-request'

const requestHeaders = {
  authorization: 'Bearer TOKE HERE',
}

const graphqlRequestsClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
  {
    headers: requestHeaders,
  }
)

export default graphqlRequestsClient
