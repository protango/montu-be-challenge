import { CountryCode } from "./countryCode";

export interface AutocompleteDetails {
  /** A stable unique id for the POI index, and a non-stable unique id for the other indexes. Note: Stable id means that it doesn't change between data releases without changing the location, attribution or classification. */
  placeId: string;
  /** The building number on the street. */
  streetNumber: string;
  /** Country ( Note: this is a two-letter code, not a country name.) */
  countryCode: CountryCode;
  /** Country name */
  country: string;
  /** An address line formatted according to the formatting rules of the result's country of origin. In the case of countries, its full country name. For the USA, in the case of geographies with entityType == PostalCodeArea it will contain the postalName field value. */
  freeformAddress: string;
  /** City / Town */
  municipality: string;
}
