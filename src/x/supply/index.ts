import { CosmosSDK } from "../..";
import { SupplyQuery } from "./types/supply-query";

export * from "./types";

export namespace Supply {
  /**
   * /supply/total
   * @param supplyQuery
   */

  export function getTotalSupply(sdk: CosmosSDK, supplyQuery: SupplyQuery) {
    return sdk.get<{}>("/supply/total", supplyQuery);
  }

  /**
   * /supply/total/{denom}
   * @param supplyQuery
   * @param denom
   */

  export function getSupplyOf(
    sdk: CosmosSDK,
    denom: string,
    supplyQuery: SupplyQuery
  ) {
    return sdk.get<{}>(`/supply/total/${denom}`, supplyQuery);
  }
}
