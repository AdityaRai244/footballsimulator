import { EventType } from "./MatchEvents.js";

export interface LanguagePack {
    name: string;
    code: string;
    phrases: Record<EventType, string[]>;
}