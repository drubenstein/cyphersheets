import {CypherSheetsConfigDialog} from './config-dialog.js';
import {CypherSheets} from "./cyphersheets-main.js";

export const registerModuleSettings = function() {
    
    game.settings.registerMenu(CypherSheets.ID, CypherSheets.SETTINGS.CYPHERSHEETSCONFIG, {
		name: game.i18n.localize("CYPHER-SHEETS.settings.cypher-sheets.Name"),
		label: game.i18n.localize("CYPHER-SHEETS.settings.cypher-sheets.Label"),
		hint: game.i18n.localize("CYPHER-SHEETS.settings.cypher-sheets.Hint"),
		icon: "fas fa-user-cog",
		type: CypherSheetsConfigDialog,
		restricted: false
	});
    
    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.NUMENERA, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.CLAIMTHESKY, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.GODSOFTHEFALL, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.PREDATION, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.PTOLUS, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.STAYALIVE, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.STARSAREFIRE, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.THESTRANGE, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.UNMASKED, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.WAAMH, {
        default: true,
        type: Boolean,
        scope: 'world',
        config: false,
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register(CypherSheets.ID, CypherSheets.SETTINGS.ORIGINAL, {
        name: game.i18n.localize("CYPHER-SHEETS.settings.cypher-system.Name"),
        default: false,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.cypher-system.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

};