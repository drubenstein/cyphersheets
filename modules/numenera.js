import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for numenera sheets => overrides templates
    
  export class NumeneraObelisk extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/numenera/numenera-obelisk.html"
      });
    }
  }
  
  export class NumeneraObeliskAnimated extends CustomCypherSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/cyphersheets/templates/numenera/numenera-obelisk-animated.html"
    });
  }
  }