import { PlayerController } from './playerController';

export class GameController {
  private playerController: PlayerController;

  constructor() {
    this.playerController = new PlayerController();
  }


  public async startGame() {
    await this.playerController.loadPlayersFromFile('availablePlayers.json');
    await this.playerController.generateHomeTeam();
  }
}