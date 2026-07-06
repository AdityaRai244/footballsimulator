export enum Language {
    English,
    Hindi,
    Spanish
}

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

export type SpeakAction = keyof Sentences;

export const languageDatabase: Record<Language, Sentences> = {

        [Language.English]: {
            matchIntro: ["Welcome to today's massive clash! The atmosphere is electric!", "The referee blows the whistle and we are officially underway!"],
            pass: ["slides a beautiful ball through the defense.", "finds a teammate with a crisp pass."],
            shoot: ["unleashes a powerful strike towards the net!", "tries their luck from long distance!"],
            goal: ["GOOOAL!! What an unbelievable finish!", "IT'S IN THE NET! Absolute class!"],
            matchResult: ["The final whistle blows! What an intense match we've witnessed today.", "That's full-time! A truly unforgettable performance from both sides."],
            run: ["is on the move, driving forward with pace.", "sprints into space, looking for an opening."],
            throughBall: ["threads a brilliant through ball between the lines!", "splits the defense with a perfectly weighted pass!"],
            tackle: ["makes a superb tackle to win the ball back!", "reads the play brilliantly and shuts down the attack!"],
            save: ["pulls off an incredible save!", "denies the striker with a stunning reflex stop!"],
            celebrate: ["celebrates in style!", "leaps into the air as the crowd erupts!"],
        },
        [Language.Spanish]: {
            matchIntro: ["¡Bienvenidos a este partidazo! ¡El ambiente es absolutamente espectacular!", "¡El árbitro hace sonar su silbato y arranca el partido!"],
            pass: ["filtra un pase espectacular entre la defensa.", "encuentra a su compañero con un pase preciso."],
            shoot: ["¡saca un latigazo tremendo hacia la portería!", "¡lo intenta desde larga distancia!"],
            goal: ["¡¡¡GOOOOLAZO!!! ¡Qué definición increíble!", "¡GOL! ¡El balón besa las redes!"],
            matchResult: ["¡Final del partido! Qué encuentro tan intenso hemos vivido hoy.", "¡Termina el partido! Una actuación inolvidable por parte de ambos equipos."],
            run: ["avanza con determinación buscando espacio.", "corre hacia adelante con mucha velocidad."],
            throughBall: ["¡mete un pase en profundidad espectacular!", "¡divide a la defensa con un pase perfecto!"],
            tackle: ["¡realiza una entrada impecable para recuperar el balón!", "¡corta el ataque con una defensa magistral!"],
            save: ["¡realiza una parada increíble!", "¡le niega el gol al delantero con un reflejo prodigioso!"],
            celebrate: ["¡celebra con mucho estilo!", "¡salta de alegría mientras la grada estalla!"],
        },
        [Language.Hindi]: {
            matchIntro: ["आज के इस महामुकाबले में आपका स्वागत है! मैदान का माहौल शानदार है!", "रेफरी की सीटी के साथ ही आज के इस रोमांचक मैच की शुरुआत!"],
            pass: ["डिफेंस को चीरता हुआ एक बेहतरीन पास निकाला।", "सटीक पास के साथ अपने साथी खिलाड़ी को ढूंढा।"],
            shoot: ["गोलपोस्ट की तरफ एक जोरदार शॉट लगाया!", "काफी दूरी से गोल करने का प्रयास किया!"],
            goal: ["गोोोोल!! क्या लाजवाब फिनिश है!", "गेंद सीधे नेट के अंदर! कमाल का गोल!"],
            matchResult: ["इसी के साथ मैच समाप्त! आज हमें एक बेहद कड़ा मुकाबला देखने को मिला।", "फुल-टाइम सीटी बज चुकी है! दोनों टीमों की तरफ से एक अविस्मरणीय प्रदर्शन।"],
            run: ["तेज़ी से आगे बढ़ रहे हैं।", "गति के साथ जगह बनाने की कोशिश कर रहे हैं।"],
            throughBall: ["एक शानदार थ्रू बॉल खेला!", "एक बेहतरीन पास से डिफेंस को चीर दिया!"],
            tackle: ["शानदार टैकल करके गेंद वापस जीत ली!", "हमले को रोकते हुए गजब की डिफेंडिंग की!"],
            save: ["एक अविश्वसनीय सेव कर ली!", "रिफ्लेक्स से स्ट्राइकर को गोल से रोक दिया!"],
            celebrate: ["जश्न मनाते हुए!", "भीड़ के साथ उछल पड़े!"],
        }

    };