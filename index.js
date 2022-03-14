const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const books = [ 
    {
        id: "qwe123",
        title: "Yabancı",
        author: "Albert Camus",
        score: 3.4,
        isPublished: true
    },
]

const typeDefs = gql`
    type User {
        name: String!
        surname: String!
        age: Int
    }

    type Query {
        user: User
    }
`;

const resolvers = {
    Query: {
        user: () => ({
            name: "Emrecan",
            surname: "Balgün",
            age: 23
        }),
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