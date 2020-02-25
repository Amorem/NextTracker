import { ApolloServer, gql } from "apollo-server-micro";
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit";
import connectDb from "../../lib/mongoose";
import { habitsResolvers } from "../../api/habits/resolvers";
import { habitsMutations, habitsMutation } from "../../api/habits/mutations";
import Habits from "../../api/habits/habits.graphql";

const fakeTypeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const fakeResolvers = {
  Query: {
    sayHello: () => {
      return "Hello";
    }
  }
};

const resolvers = mergeResolvers([
  fakeResolvers,
  habitsResolvers,
  habitsMutation
]);

const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false
  }
};

const server = apolloServer.createHandler({
  path: "/api/graphql"
});

export default connectDb(server);
