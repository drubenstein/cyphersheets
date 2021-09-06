import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";
import {registerNumeneraSettings, NumeneraExplorer, NumeneraExplorerAnimated, NumeneraArcher, NumeneraArcherAnimated} from "./numenera.js";
import {registerOriginalSheetSettings, preloadHandlebarsTemplates} from "./cs-extensions.js";
import {registerGodforsakenSettings, Godforsaken, GodforsakenAnimated} from "./godforsaken.js";
import {registerGotFSettings, GodsoftheFall, GodsoftheFallAnimated} from "./godsofthefall.js";
import {registerClaimtheSkySettings, ClaimtheSky, ClaimtheSkyAnimated} from "./claimthesky.js";
import {registerPredationSettings, Predation, PredationAnimated} from "./predation.js";
import {registerTheStrangeSettings, TheStrange, TheStrangeAnimated} from "./thestrange.js";
import {registerStayAliveSettings, StayAlive, StayAliveAnimated} from "./stayalive.js";
import {registerStarsAreFireSettings, TheStarsAreFire, TheStarsAreFireAnimated} from "./starsarefire.js";
import {registerPtolusSettings, Ptolus, PtolusAnimated} from "./ptolus.js";
import {registerWaamhSettings, WeAreAllMadHere, WeAreAllMadHereAnimated} from "./waamh.js";


// a class to hold constants for cyphersheets
class CypherSheets {

    static ID = 'cyphersheets';

    static SETTINGS = {
        NUMENERA: 'numenera',
        CLAIMTHESKY: 'claimthesky',
        GODFORSAKEN: 'godforsaken',
        GODSOFTHEFALL: 'godsofthefall',
        PREDATION: 'predation',
        THESTRANGE: 'thestrange',
        STAYALIVE: 'stayalive',
        STARSAREFIRE: 'starsarefire',
        PTOLUS: 'ptolus',
        WAAMH: 'waamh',
        ORIGINAL: 'originalsheet'
    }

    static initialize() {
        // register cypher sheets settings
        registerNumeneraSettings();
        registerClaimtheSkySettings();
        registerGodforsakenSettings();
        registerGotFSettings();
        registerPredationSettings();
        registerTheStrangeSettings();
        registerStayAliveSettings();
        registerStarsAreFireSettings();
        registerPtolusSettings();
        registerWaamhSettings();
        registerOriginalSheetSettings();

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
        Actors.registerSheet("cypher", NumeneraArcher, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", NumeneraArcherAnimated, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", NumeneraExplorer, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", NumeneraExplorerAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.CLAIMTHESKY)) {
        Actors.registerSheet("cypher", ClaimtheSky, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", ClaimtheSkyAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN)) {
        Actors.registerSheet("cypher", Godforsaken, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", GodforsakenAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODSOFTHEFALL)) {
        Actors.registerSheet("cypher", GodsoftheFall, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", GodsoftheFallAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PREDATION)) {
        Actors.registerSheet("cypher", Predation, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", PredationAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.THESTRANGE)) {
        Actors.registerSheet("cypher", TheStrange, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", TheStrangeAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STAYALIVE)) {
        Actors.registerSheet("cypher", StayAlive, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", StayAliveAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STARSAREFIRE)) {
        Actors.registerSheet("cypher", TheStarsAreFire, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", TheStarsAreFireAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PTOLUS)) {
        Actors.registerSheet("cypher", Ptolus, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", PtolusAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.WAAMH)) {
        Actors.registerSheet("cypher", WeAreAllMadHere, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", WeAreAllMadHereAnimated, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.ORIGINAL)) {
        Actors.registerSheet("cypher", CypherActorSheetPC, {types: ['PC'], makeDefault: false});
    }

    // TODO = prevent sheet settings from saving without one selected
    // if (!game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.NUMENERA) && !game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN)) {
    //         Actors.registerSheet("cypher", CypherActorSheetPC, {types: ['PC'], makeDefault: false});
    //         (game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.ORIGINAL, true));
    // }
});