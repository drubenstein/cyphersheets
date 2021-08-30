// importa original pc sheet js from cyphersystem

import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";

// create new class extensions for cypher custom sheets

export class NumeneraSheet extends CypherActorSheetPC {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/numenera.html",
        width: 700
      });
    }
}

export class GodforsakenSheet extends CypherActorSheetPC {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/cyphersheets/templates/godforsaken.html",
      width: 700
    });
  }
}