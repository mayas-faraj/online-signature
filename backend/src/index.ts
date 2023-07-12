import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import typeDefs from "./type-defs";
import resolvers from "./resolvers";

// read configuration
dotenv.config();
const port = parseInt(process.env.PORT ?? "4000");

// define express server
const app = express();
const httpServer = http.createServer(app);

// start apollo server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: false
});

await apolloServer.start();

// apply middleware
app.use("/graphql", cors<cors.CorsRequest>(), bodyParser.json(), expressMiddleware(apolloServer));
app.use("/uploads", cors<cors.CorsRequest>(), express.static("uploads", { index: false }));

// start server
await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
console.log(`Server has started: http://localhost:${port}`);
