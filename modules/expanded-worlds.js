import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for godforsaken sheets => overrides templates
    
  export class PostApocalyptic extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/expandedworlds/post-apocalyptic.html"
      });
    }
  }

  export class PostApocalypticAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/expandedworlds/post-apocalyptic-animated.html`
      });
    }
  }