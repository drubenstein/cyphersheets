// register sheets availability under module settings

export function registerNumeneraSettings() {
    game.settings.register('cyphersheets', 'numenera', {
        name: 'CYPHER-SHEETS.settings.numenera.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.numenera.Hint',
		onChange: () => location.reload(),
    })
}

export function registerGodforsakenSettings() {
    game.settings.register('cyphersheets', 'godforsaken', {
        name: 'CYPHER-SHEETS.settings.godforsaken.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.godforsaken.Hint',
		onChange: () => location.reload(),
    })
}