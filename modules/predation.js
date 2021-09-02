import {CustomCypherSheet} from "./cs-extensions.js";


// register predation sheet in module settings

  export function registerPredationSettings() {
    game.settings.register('cyphersheets', 'predation', {
        name: 'CYPHER-SHEETS.settings.predation.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.predation.Hint',
    onChange: () => location.reload(),
    })
  }

// create new class extensions for godforsaken sheets => overrides templates
    
  export class Predation extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/predation.html"
      });
    }
  }

  export class PredationAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/predation-animated.html`
      });
    }
  }