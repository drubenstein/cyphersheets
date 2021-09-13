import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for unmasked sheets => overrides templates
    
  export class Unmasked extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/unmasked/unmasked.html"
      });
    }
  }

  export class UnmaskedAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/unmasked/unmasked-animated.html`
      });
    }
  }