const typeDefs = `#graphql
  type Query {
    "admin authorization"
    users(isAdmin: Boolean!): [User]
    user(id: Int!): User
    documents: [Document]
    "user or admin authorization"
    document(id: Int!): Document
  }

  type User {
    id: Int!
    name: String!
    isAdmin: Boolean!
    password: String
  }

  input UserCreate {
    name: String!
    password: String!
    isAdmin: Boolean!
  }

  input UserUpdate {
    name: String
    password: String
  }

  type Document {
    id: Int!
    title: String!
    signatureX: Int!
    signatureY: Int!
    isDisabled: Boolean!
  }

  input DocumentCreate {
    title: String!
    signatureX: Int!
    signatureY: Int!
  }

  input DocumentUpdate {
    title: String
    signatureX: Int
    signatureY: Int
    isDisabled: Boolean
  }
`;

export default typeDefs;
