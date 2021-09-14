import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for predation sheets => overrides templates
    
  export class PredationTRex extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/predation/predation-trex.html"
      });
    }
  }

  export class PredationTRexAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/predation/predation-trex-animated.html`
      });
    }
  }