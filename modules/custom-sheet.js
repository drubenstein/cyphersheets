// importa original pc sheet js from cyphersystem

import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";

// create new class extension for cypher custom sheets => overrides width

export class CustomCypherSheet extends CypherActorSheetPC {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 700
    });
  }
}