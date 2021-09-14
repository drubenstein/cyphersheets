import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for godsofthefall sheets => overrides templates
    
  export class GodsofFallShaper extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godsofthefall/gotf-shaper.html"
      });
    }
  }

  export class GodsofFallShaperAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godsofthefall/gotf-shaper-animated.html`
      });
    }
  }