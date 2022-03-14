const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const book = {
        id: "qwe123",
        title: "Yabancı",
        author: "Albert Camus",
        score: 3.4,
        isPublished: true,
}

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        score: Float
        isPublished: Boolean
    }

    type Query {
        book: Book
    }
`;

const resolvers = {
    Query: {
        book: () => book
    }
};

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    })
  ]
});

server.listen().then(({ url }) => {
    console.log(`Apollo server is up at ${url}`);
});