import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for ptolus sheets => overrides templates
    
  export class PtolusFighters extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/ptolus/ptolus-fighters.html"
      });
    }
  }

  export class PtolusFightersAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/ptolus/ptolus-fighters-animated.html`
      });
    }
  }

  export class PtolusCitySpire extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/ptolus/ptolus-spire.html"
      });
    }
  }

  export class PtolusCitySpireAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/ptolus/ptolus-spire-animated.html`
      });
    }
  }