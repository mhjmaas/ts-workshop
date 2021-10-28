import { Player } from './players';
const fs = require('fs');

export class PlayerController {
  private homePlayers: Player[];
  private awayPlayers: Player[];

  constructor() {
  }

  public generateHomeTeam(numberOfPlayers: number): Player[] {
    
  }

  public generateAwayTeam(numberOfPlayers: number): Player[] {

  }

  public async loadPlayersFromFile(filename: string) {
    const rawPlayerData = await fs.readFile(filename);
    const jsonData = JSON.parse(rawPlayerData);
    this.homePlayers = jsonData.home as Player[];
    this.awayPlayers = jsonData.away as Player[];
  }

}