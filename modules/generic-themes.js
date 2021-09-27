import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for generic themes sheets => overrides templates
    
  export class MoldvayGreen extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/generic-themes/moldvay.html"
      });
    }
  }
