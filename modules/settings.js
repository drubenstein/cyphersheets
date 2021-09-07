export const registerModuleSettings = function() {
    
    game.settings.register('cyphersheets', 'numenera', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.numenera.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.numenera.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'claimthesky', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.claim-the-sky.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.claim-the-sky.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'godforsaken', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.godforsaken.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.godforsaken.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'godsofthefall', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.gods-of-the-fall.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.gods-of-the-fall.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'predation', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.predation.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.predation.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'ptolus', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.ptolus.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.ptolus.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'stayalive', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.stay-alive.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.stay-alive.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'starsarefire', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.the-stars-are-fire.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.the-stars-are-fire.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'thestrange', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.the-strange.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.the-strange.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'unmasked', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.unmasked.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.unmasked.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'waamh', {
        name: game.i18n.localize("CYPHER-SHEETS.settings.waamh.Name"),
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("CYPHER-SHEETS.settings.waamh.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
         }, 1000)
    });

    game.settings.register('cyphersheets', 'originalsheet', {
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