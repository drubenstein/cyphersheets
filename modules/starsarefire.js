import {CustomCypherSheet} from "./cs-extensions.js";


// register predation sheet in module settings

  export function registerStarsAreFireSettings() {
    game.settings.register('cyphersheets', 'starsarefire', {
        name: 'CYPHER-SHEETS.settings.the-stars-are-fire.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.the-stars-are-fire.Hint',
        onChange: () => location.reload(),
    })
  }

// create new class extensions for godforsaken sheets => overrides templates
    
  export class TheStarsAreFire extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/starsarefire.html"
      });
    }
  }

  export class TheStarsAreFireAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/starsarefire-animated.html`
      });
    }
  }