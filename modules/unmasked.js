import {CustomCypherSheet} from "./cs-extensions.js";


// register unmasked sheet in module settings

  export function registerUnmaskedSettings() {
    game.settings.register('cyphersheets', 'unmasked', {
        name: 'CYPHER-SHEETS.settings.unmasked.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.unmasked.Hint',
        onChange: () => location.reload(),
    })
  }

// create new class extensions for unmasked sheets => overrides templates
    
  export class Unmasked extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/unmasked.html"
      });
    }
  }

  export class UnmaskedAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/unmasked-animated.html`
      });
    }
  }