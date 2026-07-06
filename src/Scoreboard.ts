import {
    EventType,
    type GoalPayload,
    type MatchEndPayload,
    type MatchEventPayload,
    type MatchObserver,
    type ScoreDisplayPayload,
} from "./MatchEvents.js";

export class Scoreboard implements MatchObserver {
    onEvent(type: EventType, payload: MatchEventPayload): void {
        switch (type) {
            case EventType.GOAL: {
                const { team } = payload as GoalPayload;
                console.log(`⚽ ${team} just scored a goal`);
                break;
            }
            case EventType.SCORE_DISPLAY: {
                const { team1, team1Goals, team2, team2Goals } = payload as ScoreDisplayPayload;
                console.log(`📊 Current score: ${team1} ${team1Goals} - ${team2Goals} ${team2}`);
                break;
            }
            case EventType.MATCH_END: {
                const { winner } = payload as MatchEndPayload;
                if (winner) {
                    console.log(`🏆 ${winner} won the match!`);
                } else {
                    console.log(`🤝 Match tied !`);
                }
                break;
            }
        }
    }
}
