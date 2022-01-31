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

  export class GotFHellmaw extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godsofthefall/gotf-hellmaw.html"
      });
    }
  }

  export class GotFHellmawAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godsofthefall/gotf-hellmaw-animated.html`
      });
    }
  }