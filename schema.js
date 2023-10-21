export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  type AiModel{
    AiModelID: ID!,
    playerID: ID!,
    name: String,
    programingLanguage: String,
    developingEnviroment: String,
    gameagent:GameAgent
  }
  
  type GameAgent {
    playerID:ID!
    aimodelID: ID!,
    name: String,
    dificultLevel: Int,
    winRatio: Int,
    points: Int,
    aiModel: [AiModel],
    gameboard :GameBoard,
  }

  type GameBoard{
    gameBoardID:ID!,
    playerID: ID!,
    name: String!,
    movesMade: Int,
    dimensions:Int,
    GUI: String,
    gameAgent: [GameAgent],
    game : Game,
  }
  type Game {
    gameBoardID:ID!
    gameID: ID!
    name: String,
    numberOfPlayers: Int,
    rules: String,
    gameBoard: [GameBoard],
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