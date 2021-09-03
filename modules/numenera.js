import {CustomCypherSheet} from "./cs-extensions.js";

// register numenera sheet in module settings

export function registerNumeneraSettings() {
  game.settings.register('cyphersheets', 'numenera', {
      name: 'CYPHER-SHEETS.settings.numenera.Name',
      default: true,
      type: Boolean,
      scope: 'world',
      config: true,
      hint: 'CYPHER-SHEETS.settings.numenera.Hint',
      onChange: () => location.reload(),
  })
}

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
