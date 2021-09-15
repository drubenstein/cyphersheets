import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for unmasked sheets => overrides templates
    
  export class UnmaskedTeen extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/unmasked/unmasked-teen.html"
      });
    }
  }

  export class UnmaskedTeenAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/unmasked/unmasked-teen-animated.html`
      });
    }
  }