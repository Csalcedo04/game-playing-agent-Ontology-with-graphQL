import db from './db.js'
export const resolvers = {
        Game: {
          __resolveType(game, contextValue, info){
            // Only Textbook has a courses field
            if(game.GameBoard){
              return 'db.GameBoard';
            }
            // Only ColoringBook has a colors field
            if(game.GameAgent){
              return 'db.GameAgent';
            }
            if(game.AiModel){
                return 'db.AiModel';
              }
            if(game.games){
              return `db.games`
            }
            return null; // GraphQLError is thrown
          },
        },
        Query: {
            games(){
              return db.Game
            }
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
        //     return db.gamesAgents.find((a)=> a.id ===arg.id)
        // },
        // aiModels (){
        //     return db.aiModels
        // },
        // aiModel(_, arg) {
        //     return db.aiModels.find((a)=> a.id ===arg.id)
        // }
    }
