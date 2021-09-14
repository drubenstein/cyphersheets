import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for waamh sheets => overrides templates
    
  export class WeAreMadCastle extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/waamh/waamh-castle.html"
      });
    }
  }

  export class WeAreMadCastleAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/waamh/waamh-castle-animated.html`
      });
    }
  }