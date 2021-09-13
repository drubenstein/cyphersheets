import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for ptolus sheets => overrides templates
    
  export class Ptolus extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/ptolus/ptolus.html"
      });
    }
  }

  export class PtolusAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/ptolus/ptolus-animated.html`
      });
    }
  }