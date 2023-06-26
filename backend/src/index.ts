import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import typeDefs from "./type-defs";
import resolvers from "./resolvers";

// read configuration
dotenv.config();

// define server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: parseInt(process.env.PORT ?? "3000") }
});

// server started successfully
console.log(`Server ready at: http://${url}`);
