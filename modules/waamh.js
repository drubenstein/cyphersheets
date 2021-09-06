import {CustomCypherSheet} from "./cs-extensions.js";


// register waamh sheet in module settings

  export function registerWaamhSettings() {
    game.settings.register('cyphersheets', 'waamh', {
        name: 'CYPHER-SHEETS.settings.waamh.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.waamh.Hint',
        onChange: () => location.reload(),
    })
  }

// create new class extensions for waamh sheets => overrides templates
    
  export class WeAreAllMadHere extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/waamh.html"
      });
    }
  }

  export class WeAreAllMadHereAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/waamh-animated.html`
      });
    }
  }