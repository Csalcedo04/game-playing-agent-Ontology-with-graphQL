import db from './db.js'
export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, arg) {
            return db.game.find((games)=> games.id ===arg.id)
        },
        gameBoards(){
            return db.gamesBoards
        },
        gameBoard(_, arg) {
            return db.gameBoards.find((gameBoard)=> gameBoards.id ===arg.id)
        },
        gameAgents(){
            return db.gamesAgents
        },
        gameAgent(_, arg) {
            return db.gameAgents.find((gameAgent)=> gameAgents.id ===arg.id)
        },
        aiModels (){
            return db.aiModels
        },
        aiModel(_, arg) {
            return db.aiModels.find((aiModel)=> aiModel.id ===arg.id)
        }
    },
  };