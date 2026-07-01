import type { Player } from "./Player.js";

export enum Language {
    English,
    Hindi,
    Spanish
}

interface Sentences {
    matchIntro: string[];
    pass: string[];
    shoot: string[];
    goal: string[];
    matchResult: string[];
}

export class Commentary {

    public language: Language;

    public languageDatabase: Record<Language, Sentences> = {

        [Language.English]: {
            matchIntro: ["Welcome to today's massive clash! The atmosphere is electric!", "The referee blows the whistle and we are officially underway!"],
            pass: ["slides a beautiful ball through the defense.", "finds a teammate with a crisp pass."],
            shoot: ["unleashes a powerful strike towards the net!", "tries their luck from long distance!"],
            goal: ["GOOOAL!! What an unbelievable finish!", "IT'S IN THE NET! Absolute class!"],
            matchResult: ["The final whistle blows! What an intense match we've witnessed today.", "That's full-time! A truly unforgettable performance from both sides."]
        },
        [Language.Spanish]: {
            matchIntro: ["¡Bienvenidos a este partidazo! ¡El ambiente es absolutamente espectacular!", "¡El árbitro hace sonar su silbato y arranca el partido!"],
            pass: ["filtra un pase espectacular entre la defensa.", "encuentra a su compañero con un pase preciso."],
            shoot: ["¡saca un latigazo tremendo hacia la portería!", "¡lo intenta desde larga distancia!"],
            goal: ["¡¡¡GOOOOLAZO!!! ¡Qué definición increíble!", "¡GOL! ¡El balón besa las redes!"],
            matchResult: ["¡Final del partido! Qué encuentro tan intenso hemos vivido hoy.", "¡Termina el partido! Una actuación inolvidable por parte de ambos equipos."]
        },
        [Language.Hindi]: {
            matchIntro: ["आज के इस महामुकाबले में आपका स्वागत है! मैदान का माहौल शानदार है!", "रेफरी की सीटी के साथ ही आज के इस रोमांचक मैच की शुरुआत!"],
            pass: ["डिफेंस को चीरता हुआ एक बेहतरीन पास निकाला।", "सटीक पास के साथ अपने साथी खिलाड़ी को ढूंढा।"],
            shoot: ["गोलपोस्ट की तरफ एक जोरदार शॉट लगाया!", "काफी दूरी से गोल करने का प्रयास किया!"],
            goal: ["गोोोोल!! क्या लाजवाब फिनिश है!", "गेंद सीधे नेट के अंदर! कमाल का गोल!"],
            matchResult: ["इसी के साथ मैच समाप्त! आज हमें एक बेहद कड़ा मुकाबला देखने को मिला।", "फुल-टाइम सीटी बज चुकी है! दोनों टीमों की तरफ से एक अविस्मरणीय प्रदर्शन।"]
        }

    };

    constructor(language: Language) {
        this.language = language;
    }



    public generate(player: Player | null, action: "goal" | "shoot" | "pass" | "matchIntro" | "matchResult") {

        const lines = this.languageDatabase[this.language];
        const phrases = lines[action];

        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        if (action === "matchIntro" || action === "matchResult") {
            console.log(randomPhrase);
            return randomPhrase;
        }
        const name = player ? player.playerName : "";
        console.log(`${name} ${randomPhrase}`);
        return;

    }

}
