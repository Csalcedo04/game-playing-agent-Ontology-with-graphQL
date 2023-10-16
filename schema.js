export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  type AiModel{
    id: ID!,
    game_playerID: ID!,
    name: String!,
    programingLanguage: String!,
    developingEnviroment: String!,
  }
  
  type GameAgent {
    id:ID!
    aimodelID: ID!,
    name: String,
    dificultLevel: Int,
    winRatio: Int,
    points: Int,
    aiModel: [AiModel]
  }

  type GameBoard{
    id:ID!,
    playerID: ID!,
    name: String!,
    movesMade: Int,
    dimensions:Int,
    GUI: String,
    gameAgent: [GameAgent]
  }
  type Game {
    id: ID!
    name: String!,
    numberOfPlayers: Int!,
    rules: String,
    gameBoard: [GameBoard]
  }
  type Query {
    games: [Game]
    game(id:ID!): Game

    gameBoards:[GameBoard]
    gameBoard(id:ID!): GameBoard

    gameAgents: [GameAgent]
    gameAgent(id:ID!): GameAgent

    aiModels: [AiModel]
    aiModel(id:ID!): AiModel
  }
`;