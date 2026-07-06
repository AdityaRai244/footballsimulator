import { languageDatabase } from "./data.js";
import { EventType, type MatchEventPayload, type MatchObserver, type PassPayload, type PlayerActionPayload } from "./MatchEvents.js";
import type { Player } from "./Player.js";

export enum Language {
    English,
    Hindi,
    Spanish
}

type SpeakAction = keyof Sentences;

export interface Sentences {
    matchIntro: string[];
    pass: string[];
    shoot: string[];
    goal: string[];
    matchResult: string[];
    run: string[];
    throughBall: string[];
    tackle: string[];
    save: string[];
    celebrate: string[];
}

export class Commentary implements MatchObserver {

    public language: Language;


    constructor(language: Language) {
        this.language = language;
    }

    onEvent(type: EventType, payload: MatchEventPayload): void {
        switch (type) {
            case EventType.MATCH_START:
                this.speak(null, "matchIntro");
                break;
            case EventType.PASS: {
                const { player } = payload as PassPayload;
                this.speak(player, "pass");
                break;
            }
            case EventType.SHOOT: {
                const { player } = payload as PlayerActionPayload;
                this.speak(player, "shoot");
                break;
            }
            case EventType.GOAL:
                this.speak(null, "goal");
                break;
            case EventType.MATCH_END:
                this.speak(null, "matchResult");
                break;
            case EventType.RUN: {
                const { player } = payload as PlayerActionPayload;
                this.speak(player, "run");
                break;
            }
            case EventType.THROUGH_BALL: {
                const { player } = payload as PlayerActionPayload;
                this.speak(player, "throughBall");
                break;
            }
            case EventType.TACKLE: {
                const { player } = payload as PlayerActionPayload;
                this.speak(player, "tackle");
                break;
            }
            case EventType.SAVE: {
                const { player } = payload as PlayerActionPayload;
                this.speak(player, "save");
                break;
            }
            case EventType.CELEBRATE: {
                const { player } = payload as PlayerActionPayload;
                this.speak(player, "celebrate");
                break;
            }
        }
    }

    private speak(player: Player | null, action: SpeakAction): void {
        const lines = languageDatabase[this.language];
        const phrases = lines[action];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        const noPlayerPrefix: SpeakAction[] = ["matchIntro", "matchResult", "goal"];
        if (noPlayerPrefix.includes(action)) {
            console.log(`🎙️  ${randomPhrase}`);
            return;
        }

        const name = player ? player.playerName : "";
        console.log(`🎙️  ${name} ${randomPhrase}`);
    }
}
