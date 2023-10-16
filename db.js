let aiModels = [
    {
        id: 123,
        game_playerID: 1234,
        name: "sample text",
        programingLanguage: "python",
        developingEnviroment: ["pandas","numpy","neural network"]
    },
]
let gamesAgents = [
    {
        id: 1234,
        aimodelID:123 ,
        name: "Bot",
        dificultLevel: 4,
        winRatio: 30,
        points: 200,
        aiModels: [aiModels]
    },
    
];
let gamesBoards = [
    {
        id: 12345,
        name: "chess Board",
        playerID:1234,
        movesMade: 30,
        dimensions:64 ,
        GUI: `chessBoard.jpg`,
        gamesAgents: [gamesAgents]
    },
];
let games = [
    {
        id: 123456,
        gamesBoardID:12345,
        name: "chess",
        numberOfPlayers: 2,
        rules: "Lorem Ipsum",
        gamesBoards: [gamesBoards]
    },
];

export default {games, gamesBoards, gamesAgents, aiModels}