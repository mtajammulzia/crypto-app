import { IAssetData } from "modal/helpers";
import { AppType, VoteType } from "../types";
import { ETH_SYMBOL } from "helpers/constants";

/**
 *
 * @param apps: Array of apps
 * @returns React.FC according to the subdomain in url.
 */
export const getApp = (apps: Array<AppType>) => {
  const main = apps.find((item) => item.main);

  if (!main)
    throw new Error("Must set main flag to true on at least one subdomain app");

  const slicedDomain = getSubdomain(window.location.hostname);

  if (!slicedDomain) return main.app;

  const app = apps.find(({ subdomain }) => subdomain === slicedDomain);
  if (app) return app.app;
  else return main.app;
};

/**
 *
 * @param location string
 * @returns slices out baseurl and returns only subdomain/s
 */
const getSubdomain = (location: string) => {
  let sliceTill = -2;
  const locationParts = location.split(".");

  //extra step for localhost ie (no .com)
  const lastPart = locationParts.slice(-1)[0];
  if (lastPart === "localhost") sliceTill = -1;

  return locationParts.slice(0, sliceTill).join(".");
};

/**
 * Processes votes array and returns for and against weights.
 * @param votes Array of VoteType
 * @returns Summed up weights { total, for, against }.
 */
export const getWeights = (votes: Array<VoteType>) => {
  const weights = votes.reduce(
    (acc, voteOb) => {
      const { vote, weight } = voteOb;
      let [forWt, againstWt] = acc;
      if (vote) {
        forWt = forWt + weight;
      } else if (!vote) {
        againstWt = againstWt + weight;
      }
      return [forWt, againstWt];
    },
    [0, 0]
  );
  return {
    totalWeight: weights[0] + weights[1],
    forWeight: weights[0],
    againstWeight: weights[1],
  };
};

/**
 * Caluclates the difference of right now and createdAt and returns it difference in days.
 * @param createdAt: Date.now() of a proposal
 * @returns difference in days
 */
export const getEndsInDays = (createdAt: number) => {
  const msDiff = Date.now() - createdAt;
  return Math.floor(msDiff / 86400000);
};

/**
 * Extracts eth and pet balances from all assets array.
 * @param assets
 * @returns
 */
export const extractBalances = (assets: IAssetData[]) => {
  const eth = assets.find((asset) => asset.symbol === ETH_SYMBOL);

  const ethBalance = eth?.balance || 0;

  return { ethBalance };
};

/**
 * Shortens the address for display
 * @param address full address
 * @returns shortened address
 */
export const getShortenedAddress = (address: string) => {
  const shortenedAddress =
    address.substring(0, 7) + "..." + address.substring(address.length - 5);
  return shortenedAddress;
};
