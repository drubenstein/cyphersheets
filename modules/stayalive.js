import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for stayalive sheets => overrides templates
    
  export class StayAliveSurrounded extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/stayalive/stayalive-surrounded.html"
      });
    }
  }

  export class StayAliveSurroundedAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/stayalive/stayalive-surrounded-animated.html`
      });
    }
  }