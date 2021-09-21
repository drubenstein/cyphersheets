import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for godsofthefall sheets => overrides templates
    
  export class GotFDivineSpark extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godsofthefall/gotf-spark.html"
      });
    }
  }

  export class GotFDivineSparkAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godsofthefall/gotf-spark-animated.html`
      });
    }
  }

  export class GotFDragon extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godsofthefall/gotf-dragon.html"
      });
    }
  }

  export class GotFDragonAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godsofthefall/gotf-dragon-animated.html`
      });
    }
  }