import type { Commentary } from "./Commentary.js";
import {Defender, GoalKeeper, MidFielder, Player, PlayerType, Striker} from "./Player.js";

export class Team{

    public teamName : string;
    public players : Player[];
    public goals : number;

    constructor(teamName : string, players : Player[]){
        this.teamName = teamName;
        this.players = players;
        this.goals = 0;
    }

    public scoreGoal(commentary : Commentary){
        this.goals++;
        commentary.generate(null,"goal");
        console.log(`${this.teamName} just scored a goal`)
        return;
    }


}