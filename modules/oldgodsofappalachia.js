import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for generic themes sheets => overrides templates
    
  export class OldGods extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/oldgodsofappalachia/oldgodsofappalachia.html"
      });
    }
  }
