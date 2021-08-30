import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";
import {NumeneraExplorer, NumeneraExplorerAnimated, NumeneraArcher, NumeneraArcherAnimated, NumeneraMonolith, GodforsakenSheet} from "./numenera-sheets.js";
import {preloadHandlebarsTemplates} from "./templates.js";
import {registerNumeneraSettings, registerGodforsakenSettings} from "./settings.js";


// a class to hold constants for cyphersheets
class CypherSheets {

    static ID = 'cyphersheets';

    static SETTINGS = {
        NUMENERA: 'numenera',
        GODFORSAKEN: 'godforsaken'
    }

    static initialize() {
        // register cypher sheets settings
        registerNumeneraSettings();
        registerGodforsakenSettings();

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
        Actors.registerSheet("cypher", GodforsakenSheet, {types: ['PC'], makeDefault: false});
    }

if (!game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.NUMENERA) && !game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN)) {
    Actors.unregisterSheet("cypher", CypherActorSheetPC, {types: ['PC'], makeDefault: false});
}

});