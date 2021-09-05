import {CustomCypherSheet} from "./cs-extensions.js";


// register ptolus sheet in module settings

  export function registerPtolusSettings() {
    game.settings.register('cyphersheets', 'ptolus', {
        name: 'CYPHER-SHEETS.settings.ptolus.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.ptolus.Hint',
        onChange: () => location.reload(),
    })
  }

// create new class extensions for ptolus sheets => overrides templates
    
  export class Ptolus extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/ptolus.html"
      });
    }
  }

  export class PtolusAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/ptolus-animated.html`
      });
    }
  }