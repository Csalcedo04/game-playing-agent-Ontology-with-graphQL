import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  type aiModel{
    name: String,
    programingLanguage: String,
    developingEnviroment: String,
  }
  
  type gameAgent {
    name: String,
    dificultLevel: Int,
    id: String,
    winRatio: Int,
    points: Int,
    id: String,
    aiModel: [aiModel]
  }

  type gameBoard{
    name: String,
    movesMade: Int,
    dimensions:Int,
    GUI: Blob,
    gameAgent: [gameAgent]
  }
  type game {
    name: String,
    numberOfPlayers: Int,
    Rules: String,
    gameBoard: [gameBoard]
  }
  type Query {
    gameBoard: [gameAgent]
  }
`;
const gamePlayingAgent = [
    {
        name: 'The Awakening',
        dificultLevel: '3',
        id: "12e43f4",
    },
    {
        name: 'Glasss',
        dificultLevel: '3',
        id: "12e43f4",
    },
];
const GameBoard = [
    {
        name: "Chess",
        game_agent: [gamePlayingAgent]
    }
];
const resolvers = {
    Query: {
        GameBoard: () => GameBoard,
    },
  };
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);

const json = {
    "game": {
        "name": String,
        "numberOfPlayers": Int,
        "Rules": String,  
        "gameBoard":{
            "name": String,
            "dimensions":Int,
            "movesMade": Int,
            "GUI": Blob,
            "gamePlayer": {
                "name": String,
                "id": String,
                "dificultLevel": Int,
                "points": Int,
                "winRatio": Int,
                "aiModel":{
                    "name": String,
                    "programingLanguage": String,
                    "developingEnviroment": String,
                }
            },
        }
    }
}