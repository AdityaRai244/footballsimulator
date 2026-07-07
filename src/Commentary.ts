import type { LanguagePack } from "./LanguagePack.js";
import { LanguageRegistry } from "./LanguageRegistry.js";
import { EventType, type MatchEventPayload, type MatchObserver } from "./MatchEvents.js";
import type { Player } from "./Player.js";

export class Commentary implements MatchObserver {
    private languagePack: LanguagePack;

    constructor(languageCode: string) {
        this.languagePack = LanguageRegistry.get(languageCode);
    }

    onEvent(type: EventType, payload: MatchEventPayload): void {
        const phrases = this.languagePack.phrases[type];
        if (!phrases || phrases.length === 0) return;

        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        const player = (payload && "player" in payload) ? (payload as any).player as Player : null;

        const noPlayerEvents = [EventType.MATCH_START, EventType.MATCH_END, EventType.GOAL];
        if (noPlayerEvents.includes(type) || !player) {
            console.log(`🎙️  ${randomPhrase}`);
        } else {
            console.log(`🎙️  ${player.playerName} ${randomPhrase}`);
        }
    }
}
