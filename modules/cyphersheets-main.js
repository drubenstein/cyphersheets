import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";
import {registerModuleSettings} from "./settings.js";
import {NumeneraObelisk, NumeneraObeliskAnimated, NumeneraMonolith, NumeneraMonolithAnimated} from "./numenera.js";
import {preloadHandlebarsTemplates} from "./cs-extensions.js";
import {GodforsakenArcher, GodforsakenArcherAnimated, GodforsakenCombat, GodforsakenCombatAnimated} from "./godforsaken.js";
import {MoldvayGreen} from "./generic-themes.js";
import {GotFDivineSpark, GotFDivineSparkAnimated, GotFHellmaw, GotFHellmawAnimated} from "./godsofthefall.js";
import {PostApocalyptic, PostApocalypticAnimated} from "./expanded-worlds.js";
import {ClaimSkySuperheroes, ClaimSkySuperheroesAnimated} from "./claimthesky.js";
import {PredationTRex, PredationTRexAnimated} from "./predation.js";
import {TheStrangeAlien, TheStrangeAlienAnimated, TheStrangeRecursion} from "./thestrange.js";
import {StayAliveSurrounded, StayAliveSurroundedAnimated} from "./stayalive.js";
import {StarsAreFireExplorer, StarsAreFireExplorerAnimated, StarsAreFireStarfighter, StarsAreFireStarfighterAnimated} from "./starsarefire.js";
import {PtolusFighters, PtolusFightersAnimated, PtolusCitySpire, PtolusCitySpireAnimated} from "./ptolus.js";
import {UnmaskedTeen, UnmaskedTeenAnimated} from "./unmasked.js";
import {WeAreMadCastle, WeAreMadCastleAnimated} from "./waamh.js";

// a class to hold constants for cyphersheets
export class CypherSheets {

    static ID = 'cyphersheets';

    static SETTINGS = {
        CYPHERSHEETSCONFIG: 'cyphersheetsconfig',
        NUMENERA: 'numenera',
        CLAIMTHESKY: 'claimthesky',
        GENERIC: 'generic',
        GODFORSAKEN: 'godforsaken',
        GODSOFTHEFALL: 'godsofthefall',
        PREDATION: 'predation',
        THESTRANGE: 'thestrange',
        STAYALIVE: 'stayalive',
        STARSAREFIRE: 'starsarefire',
        PTOLUS: 'ptolus',
        UNMASKED: 'unmasked',
        WAAMH: 'waamh',
        EXPANDED: 'expanded',
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
        Actors.registerSheet(CypherSheets.ID, NumeneraMonolith, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, NumeneraMonolithAnimated, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, NumeneraObelisk, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, NumeneraObeliskAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.CLAIMTHESKY)) {
        Actors.registerSheet(CypherSheets.ID, ClaimSkySuperheroes, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, ClaimSkySuperheroesAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN)) {
        Actors.registerSheet(CypherSheets.ID, GodforsakenArcher, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, GodforsakenArcherAnimated, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, GodforsakenCombat, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, GodforsakenCombatAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODSOFTHEFALL)) {
        Actors.registerSheet(CypherSheets.ID, GotFDivineSpark, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, GotFDivineSparkAnimated, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, GotFHellmaw, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, GotFHellmawAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GENERIC)) {
        Actors.registerSheet(CypherSheets.ID, MoldvayGreen, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.EXPANDED)) {
        Actors.registerSheet(CypherSheets.ID, PostApocalyptic, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, PostApocalypticAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PREDATION)) {
        Actors.registerSheet(CypherSheets.ID, PredationTRex, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, PredationTRexAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PTOLUS)) {
        Actors.registerSheet(CypherSheets.ID, PtolusCitySpire, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, PtolusCitySpireAnimated, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, PtolusFighters, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, PtolusFightersAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STAYALIVE)) {
        Actors.registerSheet(CypherSheets.ID, StayAliveSurrounded, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, StayAliveSurroundedAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STARSAREFIRE)) {
        Actors.registerSheet(CypherSheets.ID, StarsAreFireExplorer, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, StarsAreFireExplorerAnimated, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, StarsAreFireStarfighter, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, StarsAreFireStarfighterAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.THESTRANGE)) {
        Actors.registerSheet(CypherSheets.ID, TheStrangeAlien, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, TheStrangeAlienAnimated, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, TheStrangeRecursion, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.UNMASKED)) {
        Actors.registerSheet(CypherSheets.ID, UnmaskedTeen, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, UnmaskedTeenAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.WAAMH)) {
        Actors.registerSheet(CypherSheets.ID, WeAreMadCastle, {types: ['pc'], makeDefault: false});
        Actors.registerSheet(CypherSheets.ID, WeAreMadCastleAnimated, {types: ['pc'], makeDefault: false});
    }

    if (game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.ORIGINAL)) {
        Actors.registerSheet(CypherSheets.ID, CypherActorSheetPC, {types: ['pc'], makeDefault: false});
    }

    // TODO = prevent sheet settings from saving without one selected
});