import {CustomCypherSheet} from "./cs-extensions.js";


// register claimthesky sheet in module settings

  export function registerClaimtheSkySettings() {
    game.settings.register('cyphersheets', 'claimthesky', {
        name: 'CYPHER-SHEETS.settings.claim-the-sky.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.claim-the-sky.Hint',
        onChange: () => location.reload(),
    })
  }

// create new class extensions for claimthesky sheets => overrides templates
    
  export class ClaimtheSky extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/claimthesky.html"
      });
    }
  }

  export class ClaimtheSkyAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/claimthesky-animated.html`
      });
    }
  }