const { ApolloServer } = require ("apollo-server");

const typeDefs = `

    type Item{
        id: Int
        type: String
        description: String
    }

    type Query{
        prefixes: [Item]
        sufixes: [Item]
    }

`;

const prefixes = [
    {id:1 , type:"prefix",description:"Air"},
    {id:2 , type:"prefix",description:"Jet"},
    {id:3 , type:"prefix",description:"Flight"},
];

const sufixes = [
    {id:1 , type:"prefix",description:"Hub"},
    {id:2 , type:"prefix",description:"Station"},
    {id:3 , type:"prefix",description:"Mart"},
];

const resolvers = {
    Query:{
        prefixes(){
            return prefixes;
        },
        sufixes(){
            return sufixes;
        }
    }
};

const server = new ApolloServer({ typeDefs , resolvers});
server.listen();