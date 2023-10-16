import db from './db.js'
export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, arg) {
            return db.games.find((games)=> games.id ===arg.id)
        },
        gameBoards(){
            return db.gamesBoards
        },
        gameBoard(_, arg) {
            return db.gamesBoards.find((gameBoard)=> gameBoards.id ===arg.id)
        },
        gameAgents(){
            return db.gamesAgents
        },
        gameAgent(_, arg) {
            return db.gamesAgents.find((gameAgent)=> gameAgents.id ===arg.id)
        },
        aiModels (){
            return db.aiModels
        },
        aiModel(_, arg) {
            return db.aiModels.find((aiModel)=> aiModel.id ===arg.id)
        }
    },
  };