import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for claimthesky sheets => overrides templates
    
  export class ClaimSkySuperheroes extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/claimthesky/claimthesky-superheroes.html"
      });
    }
  }

  export class ClaimSkySuperheroesAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/claimthesky/claimthesky-superheroes-animated.html`
      });
    }
  }