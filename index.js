const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { books, authors } = require('./data');

const typeDefs = gql`
    type Author {
        id: ID!
        name: String!
        surname: String
        age: Int
        books: [Book!] # if the book exists it cannot be null
    }

    type Book {
        id: ID!
        title: String!
        author: Author
        score: Float
        isPublished: Boolean
    }

    type Query {
        books: [Book!] # an array can be empty, but the object inside cannot be null
        book(id: ID!): Book!


        authors: [Author!]
        author(id: ID!): Author!
    }
`;

const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => {
            const data = books.find(book => book.id === args.id);

            return data;
        },

        authors: () => authors,
        author: (parent, args) => {
            const data = authors.find(author => author.id === args.id);

            return data;
        }
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