import { Commentary } from "./Commentary.js";
import { EnglishPack } from "./LanguagePacks/EnglishPack.js";
import { SpanishPack } from "./LanguagePacks/SpanishPack.js";
import { HindiPack } from "./LanguagePacks/HindiPack.js";
import { LanguageRegistry } from "./LanguageRegistry.js";
import { Match } from "./Match.js";
import { Defender, GoalKeeper, MidFielder, Striker } from "./Player.js";
import { ScoreBoard } from "./ScoreBoard.js";
import { Team } from "./Team.js";

LanguageRegistry.register(EnglishPack);
LanguageRegistry.register(SpanishPack);
LanguageRegistry.register(HindiPack);

// Match 1 Teams & Players (England vs Spain) 
const Pickford = new GoalKeeper("Pickford", 1);
const Spence = new Defender("Spence", 25);
const Konsa = new Defender("Konsa", 2);
const OReilly = new Defender("OReilly", 3);
const Guehi = new Defender("Guehi", 6);
const Anderson = new MidFielder("Anderson", 8);
const Rice = new MidFielder("Rice", 4);
const Saka = new MidFielder("Saka", 7);
const Bellingham = new MidFielder("Bellingham", 10);
const Rashford = new MidFielder("Rashford", 11);
const Kane = new Striker("Kane", 9);
const EnglandPlayers = [Pickford, Spence, Konsa, OReilly, Guehi, Anderson, Rice, Saka, Bellingham, Rashford, Kane];

const Simon = new GoalKeeper("Simón", 23);
const Cucurella = new Defender("Cucurella", 24);
const Grimaldo = new Defender("Grimaldo", 3);
const Laporte = new Defender("Laporte", 14);
const Cubarsi = new Defender("Cubarsí", 22);
const Rodri = new MidFielder("Rodri", 16);
const Pedri = new MidFielder("Pedri", 20);
const Gavi = new MidFielder("Gavi", 9);
const Olmo = new MidFielder("Olmo", 10);
const Williams = new Striker("Williams", 17);
const Yamal = new Striker("Yamal", 19);
const SpainPlayers = [Simon, Cucurella, Grimaldo, Laporte, Cubarsi, Rodri, Pedri, Gavi, Olmo, Williams, Yamal];

const England = new Team("England", EnglandPlayers);
const Spain = new Team("Spain", SpainPlayers);
const match1 = new Match(England, Spain);

const commentary1 = new Commentary("en");
const scoreBoard1 = new ScoreBoard();

match1.subscribe(commentary1);
match1.subscribe(scoreBoard1);

// Match 2 Teams & Players (France vs Italy)
const Maignan = new GoalKeeper("Maignan", 16);
const Saliba = new Defender("Saliba", 4);
const Kante = new MidFielder("Kanté", 13);
const Mbappe = new Striker("Mbappé", 10);
const FrancePlayers = [Maignan, Saliba, Kante, Mbappe];

const Donnarumma = new GoalKeeper("Donnarumma", 1);
const Bastoni = new Defender("Bastoni", 23);
const Barella = new MidFielder("Barella", 18);
const Chiesa = new Striker("Chiesa", 14);
const ItalyPlayers = [Donnarumma, Bastoni, Barella, Chiesa];

const France = new Team("France", FrancePlayers);
const Italy = new Team("Italy", ItalyPlayers);
const match2 = new Match(France, Italy);

const commentary2 = new Commentary("hi");
const scoreBoard2 = new ScoreBoard();

match2.subscribe(commentary2);
match2.subscribe(scoreBoard2);

console.log("=== STARTING MATCH 1 (England vs Spain) ===");
match1.startMatch();

Anderson.run();
Anderson.throughball();
Anderson.pass(Rashford);

Rashford.pass(Kane);
Kane.shoot();

England.scoreGoal();

match1.getScore();
match1.getResult();

console.log("\n=== STARTING MATCH 2 (France vs Italy) ===");
match2.startMatch();

Bastoni.run();
Kante.pass(Mbappe);
Mbappe.shoot();

France.scoreGoal();

match2.getScore();
match2.getResult();
