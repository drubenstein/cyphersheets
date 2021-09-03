import {CustomCypherSheet} from "./cs-extensions.js";


// register stayalive sheet in module settings

  export function registerStayAliveSettings() {
    game.settings.register('cyphersheets', 'stayalive', {
        name: 'CYPHER-SHEETS.settings.stay-alive.Name',
        default: true,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: 'CYPHER-SHEETS.settings.stay-alive.Hint',
        onChange: () => location.reload(),
    })
  }

// create new class extensions for stayalive sheets => overrides templates
    
  export class StayAlive extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/stayalive.html"
      });
    }
  }

  export class StayAliveAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/stayalive-animated.html`
      });
    }
  }