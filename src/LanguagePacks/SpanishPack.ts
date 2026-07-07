import type { LanguagePack } from "../LanguagePack.js";
import { EventType } from "../MatchEvents.js";

export const SpanishPack: LanguagePack = {
    name: "Spanish",
    code: "es",
    phrases: {
        [EventType.MATCH_START]: ["¡Bienvenidos a este partidazo! ¡El ambiente es absolutamente espectacular!", "¡El árbitro hace sonar su silbato y arranca el partido!"],
        [EventType.PASS]: ["filtra un pase espectacular entre la defensa.", "encuentra a su compañero con un pase preciso."],
        [EventType.SHOOT]: ["¡saca un latigazo tremendo hacia la portería!", "¡lo intenta desde larga distancia!"],
        [EventType.GOAL]: ["¡¡¡GOOOOLAZO!!! ¡Qué definición increíble!", "¡GOL! ¡El balón besa las redes!"],
        [EventType.MATCH_END]: ["¡Final del partido! Qué encuentro tan intenso hemos vivido hoy.", "¡Termina el partido! Una actuación inolvidable por parte de ambos equipos."],
        [EventType.RUN]: ["avanza con determinación buscando espacio.", "corre hacia adelante con mucha velocidad."],
        [EventType.THROUGH_BALL]: ["¡mete un pase en profundidad espectacular!", "¡divide a la defensa con un pase perfecto!"],
        [EventType.TACKLE]: ["¡realiza una entrada impecable para recuperar el balón!", "¡corta el ataque con una defensa magistral!"],
        [EventType.SAVE]: ["¡realiza una parada increíble!", "¡le niega el gol al delantero con un reflejo prodigioso!"],
        [EventType.CELEBRATE]: ["¡celebra con mucho estilo!", "¡salta de alegría mientras la grada estalla!"],
        [EventType.SCORE_DISPLAY]: [],
    }
};
