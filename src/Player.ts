import {EventType, matchEvents} from "./MatchEvents.js";

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
        matchEvents.publish(EventType.RUN, {player: this});
    }

    public pass(targetPlayer: Player) {
        matchEvents.publish(EventType.PASS, {
            player : this,
            receiver : targetPlayer
        })
    }

    public celebrate() {
        matchEvents.publish(EventType.CELEBRATE, {player: this});
    }

}

export class Striker extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Striker);
    }

    public shoot(): void {
        matchEvents.publish(EventType.SHOOT, {player: this});
    }
}

export class MidFielder extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Midfielder);
    }

    public throughball(): void {
        matchEvents.publish(EventType.THROUGH_BALL, {player: this});
    }

}

export class Defender extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Defender);
    }

    public tackle(): void {
        matchEvents.publish(EventType.TACKLE, {player: this});
    }

}

export class GoalKeeper extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Goalkeeper);
    }


    public save(): void {
        matchEvents.publish(EventType.SAVE, {player: this});
    }
}
