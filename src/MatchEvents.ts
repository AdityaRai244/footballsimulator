import type { Player } from "./Player.js";

export enum EventType{
    MATCH_START = "MATCH_START",
    MATCH_END = "MATCH_END",
    RUN = "RUN",
    PASS = "PASS",
    CELEBRATE = "CELEBRATE",
    SHOOT = "SHOOT",
    THROUGH_BALL = "THROUGH_BALL",
    TACKLE = "TACKLE",
    SAVE = "SAVE",
    GOAL = "GOAL",
    SCORE_DISPLAY = "SCORE_DISPLAY",
}

export interface MatchStartPayload {
    team1: string;
    team2: string;
}

export interface MatchEndPayload {
    team1: string;
    team1Goals: number;
    team2: string;
    team2Goals: number;
    winner: string | null;
}

export interface PlayerActionPayload {
    player: Player;
}

export interface PassPayload {
    player: Player;
    receiver: Player;
}

export interface GoalPayload {
    team: string;
}

export interface ScoreDisplayPayload {
    team1: string;
    team1Goals: number;
    team2: string;
    team2Goals: number;
}
export type MatchEventPayload =
    | MatchStartPayload
    | MatchEndPayload
    | PlayerActionPayload
    | PassPayload
    | GoalPayload
    | ScoreDisplayPayload
    | Record<string, never>;
    
export interface MatchObserver{
    onEvent(type : EventType, payload : MatchEventPayload) : void;
}

export class MatchEventBus{

    private observers : MatchObserver[] = [];

    public subscribe(observer : MatchObserver) : void{
        this.observers.push(observer);
    }

    public publish(type : EventType, payload : MatchEventPayload) : void{
        this.observers.forEach(observer => observer.onEvent(type, payload));
    }

}
