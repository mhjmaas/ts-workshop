import { MatchController } from './matchController';
import { PlayerController } from './playerController';
import { Referee } from '../model/referee';

export class GameController {
  public static ONE_MINUTE_DURATION_MS = 500; // one minute takes 500 milliseconds in our case. (half a second)

  private playerController: PlayerController;
  private matchController: MatchController;

  constructor() {
    this.playerController = new PlayerController();
  }


  public async startGame() {
    await this.playerController.loadPlayersFromFile('assets/availablePlayers.json');
    const homeTeam = this.playerController.generateHomeTeam(11);
    const awayTeam = this.playerController.generateAwayTeam(11);
    const referee = new Referee('Constance Jones', 38);

    this.matchController = new MatchController(homeTeam, awayTeam, referee);
    this.matchController.start();
    this.incrementGameLoop();
  }

  /**
   * This is recursive method... Which means it calls itself. You need to build in a way
   * to break out of the loop otherwise it will run forever, or run you out of memory.
   */
  public incrementGameLoop() {
    if (this.matchController.isOngoing()) {
      setTimeout(() => {
        this.matchController.nextMinute();
        this.incrementGameLoop();
      }, GameController.ONE_MINUTE_DURATION_MS);
    }
  }
}