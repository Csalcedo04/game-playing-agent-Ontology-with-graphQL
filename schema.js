export const typeDefs = `
    #graphql
  
  type AiModel implements Game{
    game_id: ID!,
    id: ID!,
    game_playerID: ID!,
    name: String!,
    programingLanguage: String!,
    developingEnviroment: [String]!,
  }
  
  type GameAgent implements Game{
    game_id: ID!,
    id:ID!
    aimodelID: ID!,
    name: String,
    dificultLevel: Int,
    winRatio: Int,
    points: Int,
    aiModel: AiModel
  }

  type GameBoard implements Game{
    game_id: ID!,
    id:ID!,
    playerID: ID!,
    name: String!,
    movesMade: Int,
    dimensions:Int,
    GUI: String,
    gameAgent: GameAgent
  }
  interface  Game {
    game_id: ID!
  }
  type Query {
    game: [Game!]!,
    games: [Game]
    
  }
  
  
`;
// type Query {
//     games: [Game]
//     game(id:ID!): Game

//     gameBoards:[GameBoard]
//     gameBoard(id:ID!): GameBoard

//     gameAgents: [GameAgent]
//     gameAgent(id:ID!): GameAgent

//     aiModels: [AiModel]
//     aiModel(id:ID!): AiModel
//   }  