import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from './schema.js'
import {resolvers} from './resolver.js'


const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);

// const json = {
//     "game": {
//         "name": String,
//         "numberOfPlayers": Int,
//         "Rules": String,  
//         "gameBoard":{
//             "name": String,
//             "dimensions":Int,
//             "movesMade": Int,
//             "GUI": Blob,
//             "gamePlayer": {
//                 "name": String,
//                 "id": String,
//                 "dificultLevel": Int,
//                 "points": Int,
//                 "winRatio": Int,
//                 "aiModel":{
//                     "name": String,
//                     "programingLanguage": String,
//                     "developingEnviroment": [String],
//                 }
//             },
//         }
//     }
// }