import type { LanguagePack } from "../LanguagePack.js";
import { EventType } from "../MatchEvents.js";

export const EnglishPack: LanguagePack = {
    name: "English",
    code: "en",
    phrases: {
        [EventType.MATCH_START]: ["Welcome to today's massive clash! The atmosphere is electric!", "The referee blows the whistle and we are officially underway!"],
        [EventType.PASS]: ["slides a beautiful ball through the defense.", "finds a teammate with a crisp pass."],
        [EventType.SHOOT]: ["unleashes a powerful strike towards the net!", "tries their luck from long distance!"],
        [EventType.GOAL]: ["GOOOAL!! What an unbelievable finish!", "IT'S IN THE NET! Absolute class!"],
        [EventType.MATCH_END]: ["The final whistle blows! What an intense match we've witnessed today.", "That's full-time! A truly unforgettable performance from both sides."],
        [EventType.RUN]: ["is on the move, driving forward with pace.", "sprints into space, looking for an opening."],
        [EventType.THROUGH_BALL]: ["threads a brilliant through ball between the lines!", "splits the defense with a perfectly weighted pass!"],
        [EventType.TACKLE]: ["makes a superb tackle to win the ball back!", "reads the play brilliantly and shuts down the attack!"],
        [EventType.SAVE]: ["pulls off an incredible save!", "denies the striker with a stunning reflex stop!"],
        [EventType.CELEBRATE]: ["celebrates in style!", "leaps into the air as the crowd erupts!"],
        [EventType.SCORE_DISPLAY]: [],
    }
};
