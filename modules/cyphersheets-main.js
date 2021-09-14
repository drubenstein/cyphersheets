import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";
import {registerModuleSettings} from "./settings.js";
import {NumeneraObelisk, NumeneraObeliskAnimated} from "./numenera.js";
import {preloadHandlebarsTemplates} from "./cs-extensions.js";
import {GodforsakenArcher, GodforsakenArcherAnimated, GodforsakenCombat, GodforsakenCombatAnimated} from "./godforsaken.js";
import {GodsofFallShaper, GodsofFallShaperAnimated} from "./godsofthefall.js";
import {ClaimtheSky, ClaimtheSkyAnimated} from "./claimthesky.js";
import {Predation, PredationAnimated} from "./predation.js";
import {TheStrange, TheStrangeAnimated} from "./thestrange.js";
import {StayAlive, StayAliveAnimated} from "./stayalive.js";
import {StarsAreFireExplorer, StarsAreFireExplorerAnimated, StarsAreFireStarfighter, StarsAreFireStarfighterAnimated} from "./starsarefire.js";
import {Ptolus, PtolusAnimated} from "./ptolus.js";
import {Unmasked, UnmaskedAnimated} from "./unmasked.js";
import {WeAreAllMadHere, WeAreAllMadHereAnimated} from "./waamh.js";

// a class to hold constants for cyphersheets
export class CypherSheets {

    static ID = 'cyphersheets';

    static SETTINGS = {
        CYPHERSHEETSCONFIG: 'cyphersheetsconfig',
        NUMENERA: 'numenera',
        CLAIMTHESKY: 'claimthesky',
        GODFORSAKEN: 'godforsaken',
        GODSOFTHEFALL: 'godsofthefall',
        PREDATION: 'predation',
        THESTRANGE: 'thestrange',
        STAYALIVE: 'stayalive',
        STARSAREFIRE: 'starsarefire',
        PTOLUS: 'ptolus',
        UNMASKED: 'unmasked',
        WAAMH: 'waamh',
        ORIGINAL: 'originalsheet'
    }

    static initialize() {
        // register cypher sheets settings
        registerModuleSettings();

        // return pc-sheet template
        return preloadHandlebarsTemplates();   
    }
}

// once the game has initialized, set up the module
Hooks.once('init', () => {
    CypherSheets.initialize();

    Actors.unregisterSheet("cypher", CypherActorSheetPC);
    // make cypher sheets available if selected under settings (*selected by default*)
    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.NUMENERA)) {
        Actors.registerSheet("cypher", NumeneraObelisk, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", NumeneraObeliskAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.CLAIMTHESKY)) {
        Actors.registerSheet("cypher", ClaimtheSky, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", ClaimtheSkyAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN)) {
        Actors.registerSheet("cypher", GodforsakenArcher, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", GodforsakenArcherAnimated, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", GodforsakenCombat, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", GodforsakenCombatAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODSOFTHEFALL)) {
        Actors.registerSheet("cypher", GodsofFallShaper, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", GodsofFallShaperAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PREDATION)) {
        Actors.registerSheet("cypher", Predation, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", PredationAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PTOLUS)) {
        Actors.registerSheet("cypher", Ptolus, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", PtolusAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STAYALIVE)) {
        Actors.registerSheet("cypher", StayAlive, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", StayAliveAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STARSAREFIRE)) {
        Actors.registerSheet("cypher", StarsAreFireExplorer, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", StarsAreFireExplorerAnimated, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", StarsAreFireStarfighter, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", StarsAreFireStarfighterAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.THESTRANGE)) {
        Actors.registerSheet("cypher", TheStrange, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", TheStrangeAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.UNMASKED)) {
        Actors.registerSheet("cypher", Unmasked, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", UnmaskedAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.WAAMH)) {
        Actors.registerSheet("cypher", WeAreAllMadHere, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", WeAreAllMadHereAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.ORIGINAL)) {
        Actors.registerSheet("cypher", CypherActorSheetPC, {types: ['PC'], makeDefault: false});
    }

    // TODO = prevent sheet settings from saving without one selected
});