const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const author = {
    id: "1",
    name: "Albert",
    surname: "Camus",
    age: "41"
}

const book = {
        id: "qwe123",
        title: "Yabancı",
        author, // author: author
        score: 3.4,
        isPublished: true,
}

const typeDefs = gql`
    type Author {
        id: ID!
        name: String!
        surname: String
        age: Int
    }

    type Book {
        id: ID!
        title: String!
        author: Author!
        score: Float
        isPublished: Boolean
    }

    type Query {
        book: Book
        author: Author
    }
`;

const resolvers = {
    Query: {
        book: () => book,
        author: () => author
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