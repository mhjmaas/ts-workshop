import { Player, Referee } from './player';

/**
 * This class is the controller for an entire match. It handles the timing, 
 * determination of the goals and penalties (cards) given.
 */
export class MatchController {
  public static ONE_MINUTE_DURATION_MS = 500; // one minute takes 500 milliseconds in our case. (half a second)
  public static FULL_TIME = 90; // The full time of an entire game
  public static HALF_TIME = 45; // When does the half time start?
  public static HALF_TIME_DURATION = 15; // How many minutes is the half time break?

  private currentMinute: number = 0; // this property gets updated to indicate the current minute of the game
  private currentBreakTime: number = 0; // how many minutes are we into the break?
  private probabilityOfCard: number = 0; // what is the probability of getting a card (percentage)
  private probabilityOfGoal: number = 0; // what is the probability of a goal (percentage)

  private matchStarted = false; // determines if the match has been started
  private inBreak = false; // if true the game is currenlty in its break time

  public homeScore = 0; // holds the current score for the home team
  public awayScore = 0; // holds the current score for the away team
  
  /**
   * Constructor for the MatchController
   * @param homePlayers An array of Players for the home team
   * @param awayPlayers An array of Players for the away team
   * @param referee The referee for the game, holds the players who have been penalised as well
   */
  constructor(public homePlayers: Player[], public awayPlayers: Player[], public referee: Referee) {
  
  }

  /**
   * Starts the match and resets all variables for the game first
   */
  public start(): void {
    // Reset variables
    this.currentMinute = 0;
    this.inBreak = false;
    this.homeScore = 0;
    this.awayScore = 0;

    // Print welcome
    console.log(`Welcome to the match!`);

    // Print match formation
    console.log(`Today's home team consists of:`);
    this.printPlayers(this.homePlayers);
    console.log(`Today's away team consists of:`);
    this.printPlayers(this.awayPlayers);

    // set some parameters for this match to make decisions on.
    this.probabilityOfGoal = Math.random() * 0.09 * 100; // use math.random to create a probability of 9% for scoring of goals
    this.probabilityOfCard = Math.random() * 0.1 * 100; // use math.random to create a probability of 10% for receiving a card

    this.matchStarted = true;
    console.log('Aaand, the match has started!!'); // GOGOGOGO!
  }

  /**
   * Handles the break events, which is just counting down until it is time to resume the match.
   */
  public breakTime(): void {
    this.inBreak = true;
    this.currentBreakTime++;

    console.log(`Currently taking a break: ${MatchController.HALF_TIME_DURATION - this.currentBreakTime} minutes left...`);
    if (this.currentBreakTime >= 15) {
      this.inBreak = false;
      this.currentMinute++;
    }
  }

  /**
   * Handles the ending of the match and printing statistics
   */
  public end():void {
    this.matchStarted = false;
    console.log(`It's the last minute, and the game has ended!!`);
    console.log(`Statistics:`);
    console.log(`Score: ${this.homeScore}-${this.awayScore}`);
    console.log(`Home team ended with ${this.homePlayers.length} players`);
    console.log(`Away team ended with ${this.awayPlayers.length} players`);
    console.log(`Yellow carded players:`);
    this.printPlayers(this.referee.yellowCardedPlayers);
    console.log(`Red carded players:`);
    this.printPlayers(this.referee.redCardedPlayers);
  }

  /**
   * Every minute this method gets called. It checks what has happened last minute
   */
  public nextMinute(): void {
    // first check if its time for a break
    if (this.inBreak || this.currentMinute === MatchController.HALF_TIME) {
      this.breakTime(); // in break time
    } else {
      this.determineGoalOrCard();
      this.currentMinute++; // add another minute to the game
      // Check if the game has ended.
      if (this.currentMinute >= MatchController.FULL_TIME) {
        this.end();
      }
    }
  }

  /**
   * Helper class to get to the matchStarted property.
   * @returns boolean, indicating whether the game is still being played
   */
  public isOngoing(): boolean {
    return this.matchStarted;
  }

  /**
   * Helper method which will check for a goal or card when not in a break
   */
  private determineGoalOrCard(): void {
    console.log(`Current minute: ${this.currentMinute}`);
    if (!this.inBreak) {
      this.checkForGoal();
      this.checkForCard();
    }
  }

  /**
   * This method picks a random player from the scoring team to award the goal to
   * @param playerList List of players for the scoring team
   */
  private printGoalScorer(playerList: Player[]): void {
    const scoringPlayer = playerList[Math.floor(Math.random() * playerList.length)];
    console.log(`GOALLLL!! ${scoringPlayer.age} year old ${scoringPlayer.name} scores the ${this.homeScore}-${this.awayScore}`);
  }

  /**
   * Helper method that used a bit of probability using the math.random library to determine if a goal has been scord
   */
  private checkForGoal(): void {
    const goalScored = Math.random() * 100; // randomize a percentage
    if (this.probabilityOfGoal > goalScored) { // here it checks if the goalScored value is lower than the probability which will indicate a goal
      // determine team
      if (Math.random() > 0.5) {
        // away team
        this.homeScore++;
        // determine player
        this.printGoalScorer(this.homePlayers);
      } else {
        // away team
        this.awayScore++;
        // determine player
        this.printGoalScorer(this.awayPlayers);
      }
    }
  }

  /**
   * Use a bit of randomness to award cards.
   */
  private checkForCard(): void {
    const cardGiven: number = Math.random() * 100;
    const isRedCard: boolean = Math.random() * 100 > 30; // 30% change of this being a red card
    if (this.probabilityOfCard > cardGiven) {
      // determine team
      this.handOutCard();
    }
  }

  /**
   * Logic for handing out a card, also using a random player from the team that has been selected.
   */
  private handOutCard(): void {
    if (Math.random() > 0.5) { // 50% chance of it being one or the other team
      // home team
      const cardedPlayer = this.homePlayers[Math.floor(Math.random() * this.homePlayers.length)];
      const isRedCard = this.referee.yellowCard(cardedPlayer);
      if (isRedCard) {
        this.removePlayerFromGame(cardedPlayer, this.homePlayers); // remove player from game
      }
    } else {
      // away team
      const cardedPlayer = this.awayPlayers[Math.floor(Math.random() * this.awayPlayers.length)];
      const isRedCard = this.referee.yellowCard(cardedPlayer);
      if (isRedCard) {
        this.removePlayerFromGame(cardedPlayer, this.awayPlayers); // remove player from game
      }
    }
  }

  private removePlayerFromGame(player: Player, team: Player[]): void {
    // remove player;
    const index = this.awayPlayers.indexOf(player);
    team.splice(index, 1);
    console.log(`Player ${player.name} received a red card and has been sent off.`);
  }

  /**
   * Prints the players name to a single line in the out log.
   * @param team the list of players to print
   */
  private printPlayers(team: Player[]): void {
    console.log(team.map(player => player.name).join(', '));
  }
}