import {CustomCypherSheet} from "./cs-extensions.js";

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