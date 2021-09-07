import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for stayalive sheets => overrides templates
    
  export class StayAlive extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/stayalive.html"
      });
    }
  }

  export class StayAliveAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/stayalive-animated.html`
      });
    }
  }