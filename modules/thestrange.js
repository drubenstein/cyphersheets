import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for thestrange sheets => overrides templates
    
  export class TheStrangeAlien extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/thestrange/thestrange-alien.html"
      });
    }
  }

  export class TheStrangeAlienAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/thestrange/thestrange-alien-animated.html`
      });
    }
  }