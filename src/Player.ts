import { EventType, MatchEventBus } from "./MatchEvents.js";

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

    protected eventBus?: MatchEventBus;

    constructor(playerName: string, jerseyNumber: number, playerType: PlayerType) {
        this.playerName = playerName;
        this.jerseyNumber = jerseyNumber;
        this.playerType = playerType;
    }

    public setEventBus(eventBus: MatchEventBus) {
        this.eventBus = eventBus;
    }
    public run() {
        this.eventBus?.publish(EventType.RUN, { player: this });
    }

    public pass(targetPlayer: Player) {
        this.eventBus?.publish(EventType.PASS, {
            player: this,
            receiver: targetPlayer
        })
    }

    public celebrate() {
        this.eventBus?.publish(EventType.CELEBRATE, { player: this });
    }

}

export class Striker extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Striker);
    }

    public shoot(): void {
        this.eventBus?.publish(EventType.SHOOT, { player: this });
    }
}

export class MidFielder extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Midfielder);
    }

    public throughball(): void {
        this.eventBus?.publish(EventType.THROUGH_BALL, { player: this });
    }

}

export class Defender extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Defender);
    }

    public tackle(): void {
        this.eventBus?.publish(EventType.TACKLE, { player: this });
    }

}

export class GoalKeeper extends Player {

    constructor(playerName: string, jerseyNumber: number) {
        super(playerName, jerseyNumber, PlayerType.Goalkeeper);
    }


    public save(): void {
        this.eventBus?.publish(EventType.SAVE, { player: this });
    }
}
