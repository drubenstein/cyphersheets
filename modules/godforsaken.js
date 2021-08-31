import {CustomCypherSheet} from "./cs-extensions.js";


// register godforsaken sheet in module settings

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

// create new class extensions for godforsaken sheets => overrides templates
    
  export class Godforsaken extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godforsaken.html"
      });
    }
  }

  export class GodforsakenAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godforsaken-animated.html`
      });
    }
  }