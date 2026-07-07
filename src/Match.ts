import { EventType, MatchEventBus, type MatchObserver } from "./MatchEvents.js";
import { Team } from "./Team.js";

export class Match {
  public Team1: Team;
  public Team2: Team;

  private eventBus: MatchEventBus;

  constructor(Team1: Team, Team2: Team) {
    this.Team1 = Team1;
    this.Team2 = Team2;

    this.eventBus = new MatchEventBus();
    this.Team1.setEventBus(this.eventBus);
    this.Team2.setEventBus(this.eventBus);
  }

  public subscribe(observer: MatchObserver) {
    this.eventBus.subscribe(observer);
  }

  public startMatch() {
    this.eventBus.publish(EventType.MATCH_START, {
      team1: this.Team1.teamName,
      team2: this.Team2.teamName,
    });
  }

  public getScore() {
    this.eventBus.publish(EventType.SCORE_DISPLAY, {
      team1: this.Team1.teamName,
      team1Goals: this.Team1.goals,
      team2: this.Team2.teamName,
      team2Goals: this.Team2.goals,
    });
  }

  public getResult(): void {
    const team1Goals = this.Team1.goals;
    const team2Goals = this.Team2.goals;
    let winner: string | null = null;

    if (team1Goals > team2Goals) {
      winner = this.Team1.teamName;
    } else if (team2Goals > team1Goals) {
      winner = this.Team2.teamName;
    }

    this.eventBus.publish(EventType.MATCH_END, {
      team1: this.Team1.teamName,
      team1Goals,
      team2: this.Team2.teamName,
      team2Goals,
      winner,
    });
  }
}
