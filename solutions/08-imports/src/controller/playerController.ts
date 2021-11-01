import { Player } from '../model/player';
const fs = require('fs'); // there is no es6 import for FS just yet, so have a look at the old way here, using require.

/**
 * Manages the players for both the home and away team.
 */
export class PlayerController {
  private homePlayers: Player[] = [];
  private awayPlayers: Player[] = [];

  constructor() {
  }

  /**
   * Generates the home team by taking the homePlayers and shuffling them around
   * @param numberOfPlayers number, indicating the number of players to generate for the home team.
   * @returns 
   */
  public generateHomeTeam(numberOfPlayers: number): Player[] {
    return this.generateTeam(this.homePlayers, numberOfPlayers);
  }

  /**
   * Generates the away team by taking the awayPlayers and shuffling them around
   * @param numberOfPlayers number, indicating the number of players to generate for the home team.
   * @returns 
   */
  public generateAwayTeam(numberOfPlayers: number): Player[] {
    return this.generateTeam(this.awayPlayers, numberOfPlayers);
  }

  public generateTeam(players: Player[], numberOfPlayers: number): Player[] {
    // If we have enough players, shuffle and slice them to return the amount requested
    if (players && players.length >= numberOfPlayers) {
      return this.shuffle(players).slice(0, numberOfPlayers); // chainging of methods, first shuffle the array, then slice out the part we need.
    } else {
      return this.shuffle(players); // if we don't have enough players just return the shuffled list.
    }
  }

  /**
   * Uses the FS built in library to load the players from a file you specify asynchrously.
   * @param filename, a string indicating the file in which the json for the players resides
   * @returns 
   */
  public async loadPlayersFromFile(filename: string): Promise<void> { // we return a promise to keep working asynchronous
    return new Promise((resolve, reject) => {
      // read the file asynchronous.
      fs.readFile(filename, (error: Object, rawPlayerData: string, ) => {
        // If there was an error, reject the promise
        if (error) {
          reject();
        }

        // if we get here the file has been loaded successfully
        const jsonData = JSON.parse(rawPlayerData); // Parse the raw data to a js object.
        this.homePlayers = jsonData.home as Player[]; // read the object and cast to player data
        this.awayPlayers = jsonData.away as Player[];
        resolve(); // done loading, so resolve the promise.
      });
    })
  }


  /**
   * Helper class to shuffle the array you provide around a bit.
   * @param array The array you would like to shuffle
   * @returns 
   */
  private shuffle(array: Player[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}