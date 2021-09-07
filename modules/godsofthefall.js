import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for godsofthefall sheets => overrides templates
    
  export class GodsoftheFall extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godsofthefall.html"
      });
    }
  }

  export class GodsoftheFallAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godsofthefall-animated.html`
      });
    }
  }