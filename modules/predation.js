import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for predation sheets => overrides templates
    
  export class Predation extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/predation/predation.html"
      });
    }
  }

  export class PredationAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/predation/predation-animated.html`
      });
    }
  }