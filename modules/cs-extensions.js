// import original pc sheet JS from cyphersystem

import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";

// create new class extension from original cyphersystem sheet => overrides width

export class CustomCypherSheet extends CypherActorSheetPC {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 700
    });
  }
}

// load original pc-sheet template from cypherystem

export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    "systems/cyphersystem/templates/actor/pc-sheet.html"
  ]);
};