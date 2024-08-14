import axios from "axios";
import { FuzzySearchResults } from "../types/maps-api";
import { CountryCode } from "../types/countryCode";

/**
 * Call the fuzzy search API to complete an incomplete place or address
 * @param key The TomTom API Key
 * @param address The incomplete address to search for
 * @param options Options for the search
 * @returns A list of places which match the search address
 * @link https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
 */
export async function getPlaceAutocomplete(
  key: string,
  address: string,
  options?: {
    /** Limit the search to countries in this array */
    countrySet?: CountryCode[];
    /** Maximum number of search results, default 100 */
    limit?: number;
  },
): Promise<FuzzySearchResults["results"]> {
  const autocomplete = await axios.get<FuzzySearchResults>(
    `https://api.tomtom.com/search/2/search/${address}.json'`,
    {
      params: {
        key,
        limit: options?.limit ?? 100,
        countrySet: options?.countrySet?.join(","),
      },
    },
  );

  // Return complete results
  return autocomplete.data.results;
}
