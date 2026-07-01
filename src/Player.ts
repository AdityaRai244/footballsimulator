import type { Commentary } from "./Commentary.js";

export enum PlayerType {
    Striker,
    Midfielder,
    Defender,
    Goalkeeper
}

export class Player {

    public playerName: string;
    public jerseyNumber: number;
    public playerType: PlayerType;

    constructor(playerName: string, jerseyNumber: number, playerType: PlayerType) {
        this.playerName = playerName;
        this.jerseyNumber = jerseyNumber;
        this.playerType = playerType;
    }

    public run() {
        console.log(`${this.playerName} is running`);
        return;
    }

    public pass(targetPlayer: Player, commentary: Commentary) {
        console.log(`${this.playerName} passed the ball to ${targetPlayer.playerName}`);
        commentary.generate(this, "pass");
        return;
    }

    public celebrate() {
        console.log(`${this.playerName} is celebrating`);
        return;
    }

}

export class Striker extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Striker);
    }

    public shoot(commentary: Commentary): void {
        console.log(`${this.playerName} shot the ball towards the goal !!!`);
        commentary.generate(this, "shoot");
    }
}

export class MidFielder extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Midfielder);
    }

    public throughball(): void {
        console.log(`${this.playerName} made an incredible through pass`);
    }

}


export class Defender extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Defender);
    }

    public tackle(): void {
        console.log(`Great defending from ${this.playerName}`);
    }

}


export class GoalKeeper extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Goalkeeper);
    }

    public save(): void {
        console.log(`Incredible goal save by ${this.playerName}`);
    }
}