import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for godforsaken sheets => overrides templates
    
  export class StarsAreFireExplorer extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/starsarefire/starsarefire-explorer.html"
      });
    }
  }

  export class StarsAreFireExplorerAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/starsarefire/starsarefire-explorer-animated.html`
      });
    }
  }

  export class StarsAreFireStarfighter extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/starsarefire/starsarefire-starfighter.html"
      });
    }
  }

  export class StarsAreFireStarfighterAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/starsarefire/starsarefire-starfighter-animated.html`
      });
    }
  }