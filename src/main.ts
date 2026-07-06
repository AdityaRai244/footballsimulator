import { Commentary } from "./Commentary.js";
import { Language } from "./data.js";
import { Match } from "./Match.js";
import { matchEvents } from "./MatchEvents.js";
import { Defender, GoalKeeper, MidFielder, Striker } from "./Player.js";
import { ScoreBoard } from "./ScoreBoard.js";
import { Team } from "./Team.js";

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
const match = new Match(England, Spain);

const commentary = new Commentary(Language.English);
const scoreBoard = new ScoreBoard();

matchEvents.subscribe(commentary);
matchEvents.subscribe(scoreBoard);


match.startMatch();

Anderson.run();
Anderson.throughball();
Anderson.pass(Rashford); 

Rashford.pass(Kane);     
Kane.shoot();              

England.scoreGoal();

match.getScore();
match.getResult();