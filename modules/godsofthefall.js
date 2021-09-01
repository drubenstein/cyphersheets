import {CustomCypherSheet} from "./cs-extensions.js";


// register godforsaken sheet in module settings

  export function registerGotFSettings() {
    game.settings.register('cyphersheets', 'godsofthefall', {
        name: 'CYPHER-SHEETS.settings.gods-of-the-fall.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.gods-of-the-fall.Hint',
    onChange: () => location.reload(),
    })
  }

// create new class extensions for godforsaken sheets => overrides templates
    
  export class GodsoftheFall extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godsofthefall.html"
      });
    }
  }

  export class GodsoftheFallAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godsofthefall-animated.html`
      });
    }
  }