// importa original pc sheet js from cyphersystem

import {CypherActorSheetPC} from "../../../systems/cyphersystem/module/actor/pc-sheet.js";

// create new class extensions for cypher custom sheets

export class NumeneraArcher extends CypherActorSheetPC {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/cyphersheets/templates/numenera-archer.html",
      width: 700
    });
  }
}

export class NumeneraArcherAnimated extends CypherActorSheetPC {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/cyphersheets/templates/numenera-archer-animated.html",
      width: 700
    });
  }
}

export class NumeneraExplorer extends CypherActorSheetPC {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/cyphersheets/templates/numenera-explorer.html",
      width: 700
    });
  }
}

export class NumeneraExplorerAnimated extends CypherActorSheetPC {
/** @override */
static get defaultOptions() {
  return foundry.utils.mergeObject(super.defaultOptions, {
    template: "modules/cyphersheets/templates/numenera-explorer-animated.html",
    width: 700
  });
}
}

export class NumeneraMonolith extends CypherActorSheetPC {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/cyphersheets/templates/numenera-monolith.html",
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