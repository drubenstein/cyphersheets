import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for claimthesky sheets => overrides templates
    
  export class ClaimtheSky extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/claimthesky/claimthesky.html"
      });
    }
  }

  export class ClaimtheSkyAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/claimthesky/claimthesky-animated.html`
      });
    }
  }