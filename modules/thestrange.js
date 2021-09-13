import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for thestrange sheets => overrides templates
    
  export class TheStrange extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/thestrange/thestrange.html"
      });
    }
  }

  export class TheStrangeAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/thestrange/thestrange-animated.html`
      });
    }
  }