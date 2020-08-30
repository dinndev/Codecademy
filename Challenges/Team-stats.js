const team = {
    _players: [{
        firstName: 'Din',
        lastName: 'Penagunda',
        age: 45
    }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }],
  get firstName () {
     
  },
  get games () {
     
}, 
  addPlayers(firstName , lastName ,age){
    const player = {
        firstName,
        lastName,
        age
    }
    this._players.push(player);
},
addGames(opponent , teamPoints ,opponentPoints){
    const games = {
        opponent,
        teamPoints,
        opponentPoints
    }
    this._games.push(games);
},

}

team.addPlayers('din','penagunda',4545);
console.log(team._players)
