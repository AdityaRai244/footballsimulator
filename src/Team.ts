import { EventType, MatchEventBus } from "./MatchEvents.js";
import { Player } from "./Player.js";

export class Team {

    public teamName: string;
    public players: Player[];
    public goals: number;
    private eventBus?: MatchEventBus;

    constructor(teamName: string, players: Player[]) {
        this.teamName = teamName;
        this.players = players;
        this.goals = 0;
    }
    public setEventBus(eventBus: MatchEventBus) {
        this.eventBus = eventBus;
        this.players.forEach(player => player.setEventBus(eventBus));
    }

    public scoreGoal() {
        this.goals++;
        this.eventBus?.publish(EventType.GOAL, { team: this.teamName });
    }

}
