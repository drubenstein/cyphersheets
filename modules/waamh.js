import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for waamh sheets => overrides templates
    
  export class WeAreAllMadHere extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/waamh/waamh.html"
      });
    }
  }

  export class WeAreAllMadHereAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/waamh/waamh-animated.html`
      });
    }
  }