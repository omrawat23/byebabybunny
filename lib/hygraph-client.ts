import { gql, GraphQLClient } from "graphql-request";

const hygraphClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!
);

export default hygraphClient;
export { gql };