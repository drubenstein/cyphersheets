import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";
import {registerNumeneraSettings, NumeneraExplorer, NumeneraExplorerAnimated, NumeneraArcher, NumeneraArcherAnimated, NumeneraMonolith} from "./numenera.js";
import {registerOriginalSheetSettings, preloadHandlebarsTemplates} from "./cs-extensions.js";
import {registerGodforsakenSettings, Godforsaken, GodforsakenAnimated} from "./godforsaken.js";


// a class to hold constants for cyphersheets
class CypherSheets {

    static ID = 'cyphersheets';

    static SETTINGS = {
        NUMENERA: 'numenera',
        GODFORSAKEN: 'godforsaken',
        ORIGINAL: 'originalsheet'
    }

    static initialize() {
        // register cypher sheets settings
        registerNumeneraSettings();
        registerGodforsakenSettings();
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
        Actors.registerSheet("cypher", NumeneraMonolith, {types: ['PC'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN)) {
        Actors.registerSheet("cypher", Godforsaken, {types: ['PC'], makeDefault: false});
        Actors.registerSheet("cypher", GodforsakenAnimated, {types: ['PC'], makeDefault: false});
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