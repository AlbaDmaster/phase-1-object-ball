function gameObject(){
    let Obj1={home:{teamName:"Brooklyn Nets",
                     colors:["Black","White"],
                     players:{
                        "Alan Anderson":{
                            "number":0,
                            "shoe":16,
                            "points":22,
                            "rebounds":12,
                            "assists":12,
                            "steals":3,
                            "blocks":1,
                            "slamDunks":1
                        },
                        "Reggie Evans":{
                            "number":30,
                            "shoe":14,
                            "points":12,
                            "rebounds":12,
                            "assists":12,
                            "steals":12,
                            "blocks":12,
                            "slamDunks":7
                        },
                        "Brook Lopez":{
                            "number":11,
                            "shoe":17,
                            "points":17,
                            "rebounds":19,
                            "assists":10,
                            "steals":3,
                            "blocks":1,
                            "slamDunks":15
                        },
                        "Mason Plumlee":{
                            "number":1,
                            "shoe":19,
                            "points":26,
                            "rebounds":12,
                            "assists":6,
                            "steals":3,
                            "blocks":8,
                            "slamDunks":5
                        },
                        "Jason Terry":{
                            "number":31,
                            "shoe":15,
                            "points":19,
                            "rebounds":2,
                            "assists":2,
                            "steals":4,
                            "blocks":11,
                            "slamDunks":1
                        }
                     }
},
    away:{
        teamName:"Charlotte Hornets",
        colors:["Turquoise","Purple"],
        players:{
            "Jeff Adrien":{
                "number":4,
                "shoe":18,
                "points":10,
                "rebounds":1,
                "assists":1,
                "steals":2,
                "blocks":7,
                "slamDunks":2
            },
            "Bismak Biyombo":{
                "number":0,
                "shoe":16,
                "points":12,
                "rebounds":4,
                "assists":7,
                "steals":7,
                "blocks":15,
                "slamDunks":10
            },
            "Desagna Diop":{
                "number":2,
                "shoe":14,
                "points":24,
                "rebounds":12,
                "assists":12,
                "steals":4,
                "blocks":5,
                "slamDunks":5
            },
            "Ben Gordon":{
                "number":8,
                "shoe":15,
                "points":33,
                "rebounds":3,
                "assists":2,
                "steals":1,
                "blocks":1,
                "slamDunks":0
            },
            "Brendan Haywood":{
                "number":33,
                "shoe":15,
                "points":16,
                "rebounds":12,
                "assists":12,
                "steals":22,
                "blocks":5,
                "slamDunks":12
            }
        }
    }
    

};
return Obj1;
}

//console.log(gameObject());

function numPointsScored(playerName) {
const gameObj=gameObject();

    for (const player in gameObj.home.players) {
        if (player === playerName) {
            return gameObj.home.players[player].points;
        }
    }

    for (const player in gameObj.away.players) {
        if (player === playerName) {
            return gameObj.away.players[player].points;
        }
    }

    return null;
}

//console.log(numPointsScored("Jason Terry"));

function shoeSize(playerName){
    let gameObj=gameObject();
    for(const player in gameObj.home.players){
        if (playerName===player){
            return gameObj.home.players[player].shoe;
        }
    }

    for(const player in gameObj.away.players){
        if (playerName===player){
            return gameObj.away.players[player].shoe;
        }
    }

    return null;
}

//console.log(shoeSize("Jason Terry"));

function teamColors(teamName) {
    // Call gameObject function to get the game object
    const gameObj = gameObject();

    // Check if the team name matches the home team
    if (gameObj.home.teamName === teamName) {
        return gameObj.home.colors;
    }

    // Check if the team name matches the away team
    if (gameObj.away.teamName === teamName) {
        return gameObj.away.colors;
    }

    // Team not found, return null
    return null;
}

//console.log(teamColors("Charlotte Hornets"));

function teamNames(){
    let gameObj=gameObject();
   let Names=[gameObj.home.teamName,gameObj.away.teamName];
   return Names;
}
//console.log(teamNames());
function playerNumbers(teamName) {
    // Call gameObject function to get the game object
    const gameObj = gameObject();

    // Check if the team name matches the home team
    if (gameObj.home.teamName === teamName) {
        // Extract jersey numbers from the home team players and return them as an array
        return Object.values(gameObj.home.players).map(player => player.number);
    }

    // Check if the team name matches the away team
    if (gameObj.away.teamName === teamName) {
        // Extract jersey numbers from the away team players and return them as an array
        return Object.values(gameObj.away.players).map(player => player.number);
    }

    // Team not found, return null
    return null;
}




//console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
    // Call gameObject function to get the game object
    const gameObj = gameObject();

    // Iterate through home team players
    for (const player in gameObj.home.players) {
        if (player === playerName) {
            return gameObj.home.players[player];
        }
    }

    // Iterate through away team players
    for (const player in gameObj.away.players) {
        if (player === playerName) {
            return gameObj.away.players[player];
        }
    }

    // Player not found, return null or handle appropriately
    return null;
}

console.log(playerStats("Alan Anderson"));