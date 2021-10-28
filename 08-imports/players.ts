export class Player {
    constructor(public name: string, public age: number) {}
}

export class Referee extends Player {
    private yellowCardedPlayers: Player[] = []; // initialized with an empty array
    private redCardedPlayers: Player[] = []; // initialized with an empty array

    constructor(public name: string, public age: number) {
        super(name, age);
    }

    public yellowCard(player: Player): void {
        this.yellowCardedPlayers.push(player);
    }

    public redCard(player: Player): void {
        this.redCardedPlayers.push(player);
    }
}