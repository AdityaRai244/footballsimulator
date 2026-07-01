import type { Commentary } from "./Commentary.js";
import { Team } from "./Team.js";

export class Match {

    public Team1: Team;
    public Team2: Team;

    constructor(Team1: Team, Team2: Team) {

        this.Team1 = Team1;
        this.Team2 = Team2;

    }

    public startMatch(commentary: Commentary) {
        commentary.generate(null, "matchIntro");
    }

    public getScore() {
        console.log(`Current score is ${this.Team1.teamName} : ${this.Team1.goals} - ${this.Team2.teamName} : ${this.Team2.goals}`)
        return;
    }

    public getResult(commentary: Commentary) {
        commentary.generate(null, "matchResult");
        if (this.Team1.goals > this.Team2.goals) {
            console.log(`${this.Team1.teamName} won the match !!`)
            return;
        } else if (this.Team1.goals < this.Team2.goals) {
            console.log(`${this.Team2.teamName} won the match !!`);
            return;
        } else {
            console.log(`Match Tied`);
            return;
        }
    }

}