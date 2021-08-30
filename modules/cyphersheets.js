import {NumeneraSheet, GodforsakenSheet} from "./custom-sheets.js";
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

    // make cypher sheets available if selected under settings (*selected by default*)
    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.NUMENERA)) {
        Actors.registerSheet("cypher", NumeneraSheet, {types: ['PC'], makeDefault: false});
    }
    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN)) {
        Actors.registerSheet("cypher", GodforsakenSheet, {types: ['PC'], makeDefault: false});
    }
});