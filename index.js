const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {

    Query: {
        books: () => {
            return [ 
            {
                title: "Yabancı",
                author: "Albert Camus",
            },
            {
                title: "Deneme Kitap",
                author: "Deneme Yazar", 
            }
        ]
        },
    },
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