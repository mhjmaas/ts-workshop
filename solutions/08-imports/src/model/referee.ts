import { Player } from './player';

/**
 * Refereen extends a player but makes him special by being able to card players.
 */
 export class Referee extends Player {
  public yellowCardedPlayers: Player[] = []; // initialized with an empty array
  public redCardedPlayers: Player[] = []; // initialized with an empty array

  constructor(public name: string, public age: number) {
      super(name, age);
  }

  /**
   * Writes down a player as receiving a yellow card, when the player already has a yellow card the method return true, 
   * and will be automatically added to the red card list using the redCard method.
   * @param player the player who received the yellow card.
   */
  public yellowCard(player: Player): boolean {
      // first check if the player hasn't already received a yellow card
      const foundIndex = this.yellowCardedPlayers.indexOf(player);
      if (foundIndex == -1) {
          // hasnt got a yellow card yet
          this.yellowCardedPlayers.push(player);
          console.log(`Player ${player.name} received a yellow card.`);
          return false;
      } else {

          // second red card, red card him or her
          this.yellowCardedPlayers.splice(foundIndex, 1);
          console.log(`Player ${player.name} received a second yellow card and has been sent off with a red card.`);
          this.redCard(player);
          return true;
      }
      
  }

  public redCard(player: Player): void {
      this.redCardedPlayers.push(player);

      // check if the user is in the yellow cards list and remove him or her
      const foundIndex = this.yellowCardedPlayers.indexOf(player);
      if (foundIndex) {
          this.yellowCardedPlayers.splice(foundIndex, 1);
      }
  }
}