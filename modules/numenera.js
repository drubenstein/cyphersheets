import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for numenera sheets => overrides templates

export class NumeneraArcher extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/numenera-archer.html"
      });
    }
  }
  
  export class NumeneraArcherAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/numenera-archer-animated.html"
      });
    }
  }
  
  export class NumeneraExplorer extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/numenera-explorer.html"
      });
    }
  }
  
  export class NumeneraExplorerAnimated extends CustomCypherSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/cyphersheets/templates/numenera-explorer-animated.html"
    });
  }
  }
