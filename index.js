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
        author_id: ID!
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

        book: (parent, args) => books.find(book => book.id === args.id),

        authors: () => authors,

        author: (parent, args) => authors.find(author => author.id === args.id),  
    },

    Book: {
        author: (parent) => authors.find((author) => author.id ===  parent.author_id),
    },

    Author: {
        books: (parent) => books.filter((book) => book.author_id === parent.id),
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