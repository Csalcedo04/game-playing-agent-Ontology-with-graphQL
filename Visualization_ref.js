// Visualizacion de como se deberia ver la ontoligía, pero utilizando una estructura JSON como referencia
const json = {
    "data": {
        "game": {
            "id": ID,
            "gamesBoardID":ID,
            "name": String,
            "numberOfPlayers": Int,
            "Rules": String,  
            "gameBoard":{
                "id": ID,
                "playerID":ID,
                "name": String,
                "dimensions":Int,
                "movesMade": Int,
                "GUI": String,
                "gamePlayer": {
                    "playerID": ID,
                    "name": String,
                    "dificultLevel": Int,
                    "winRatio": Int,
                    "points": Int,
                    "aiModel":{
                        "playerID": ID,
                        "name": String,
                        "programingLanguage": String,
                        "developingEnviroment": [String],
                    }
                },
            }
        }
    }
}