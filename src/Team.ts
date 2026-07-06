import { EventType, matchEvents } from "./MatchEvents.js";
import {Player} from "./Player.js";

export class Team{

    public teamName : string;
    public players : Player[];
    public goals : number;

    constructor(teamName : string, players : Player[]){
        this.teamName = teamName;
        this.players = players;
        this.goals = 0;
    }

    public scoreGoal(){
        this.goals++;
        matchEvents.publish(EventType.GOAL, {team: this.teamName});
    }


}