import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const resolvers = {
  Query: {
    users: async (_parent: any, args: any) => {
      return await prismaClient.user.findMany({
        where: {
          isAdmin: args.isAdmin
        }
      });
    },
    user: async (_parent: any, args: any) => {
      return await prismaClient.user.findUnique({
        where: {
          id: args.id
        }
      });
    },
    documents: async (_parent: any, args: any) => {
      return await prismaClient.document.findMany();
    },
    document: async (_parent: any, args: any) => {
      return await prismaClient.document.findUnique({
        where: {
          id: args.id
        }
      });
    }
  }
};

export default resolvers;
