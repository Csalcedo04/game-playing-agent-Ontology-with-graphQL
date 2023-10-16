import db from './db.js'
export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        // game(_, arg) {
        //     return db.games.find((a)=> a.id ===arg.id)
        // },
        // gameBoards(){
        //     return db.gamesBoards
        // },
        // gameBoard(_, arg) {
        //     return db.gamesBoards.find((a)=> a.id ===arg.id)
        // },
        // gameAgents(){
        //     return db.gamesAgents
        // },
        // gameAgent(_, arg) {
        //     return db.gameAgents.find((a)=> a.id ===arg.id)
        // },
        // aiModels (){
        //     return db.aiModels
        // },
        // aiModel(_, arg) {
        //     return db.aiModels.find((a)=> a.id ===arg.id)
        // }
    },
  };