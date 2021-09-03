import {CustomCypherSheet} from "./cs-extensions.js";


// register thestrange sheet in module settings

  export function registerTheStrangeSettings() {
    game.settings.register('cyphersheets', 'thestrange', {
        name: 'CYPHER-SHEETS.settings.the-strange.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.the-strange.Hint',
        onChange: () => location.reload(),
    })
  }

// create new class extensions for thestrange sheets => overrides templates
    
  export class TheStrange extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/thestrange.html"
      });
    }
  }

  export class TheStrangeAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/thestrange-animated.html`
      });
    }
  }