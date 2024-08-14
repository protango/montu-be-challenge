// Based on documentation available at
// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search

export interface FuzzySearchResults {
  summary: Summary;
  results: Result[];
}

interface Result {
  type: string;
  id: string;
  score: number;
  dist: number;
  info: string;
  entityType: string;
  poi: Poi;
  relatedPois: RelatedPois[];
  address: Address;
  position: GeoBias;
  mapcodes: Mapcode[];
  viewport: Viewport;
  entryPoints: EntryPoint[];
  addressRanges: AddressRanges;
  chargingPark: ChargingPark;
  dataSources: DataSources;
}

interface Address {
  streetNumber: string;
  streetName: string;
  municipalitySubdivision: string;
  municipality: string;
  countrySecondarySubdivision: string;
  countryTertiarySubdivision: string;
  countrySubdivision: string;
  postalCode: string;
  extendedPostalCode: string;
  countryCode: string;
  country: string;
  countryCodeISO3: string;
  freeformAddress: string;
  countrySubdivisionName: string;
  localName: string;
}

interface AddressRanges {
  rangeLeft: string;
  rangeRight: string;
  from: GeoBias;
  to: GeoBias;
}

interface GeoBias {
  lat: number;
  lon: number;
}

interface ChargingPark {
  connectors: Connector[];
}

interface Connector {
  connectorType: string;
  ratedPowerKW: number;
  currentA: number;
  currentType: string;
  voltageV: number;
}

interface DataSources {
  chargingAvailability: ChargingAvailability;
  parkingAvailability: ChargingAvailability;
  fuelPrice: ChargingAvailability;
  geometry: ChargingAvailability;
}

interface ChargingAvailability {
  id: string;
}

interface EntryPoint {
  type: string;
  position: GeoBias;
  functions?: string[];
}

interface Mapcode {
  type: string;
  fullMapcode: string;
  territory?: string;
  code?: string;
}

interface Poi {
  name: string;
  phone: string;
  url: string;
  brands: Brand[];
  categorySet: CategorySet[];
  categories: string[];
  openingHours: OpeningHours;
  classifications: Classification[];
  timeZone: TimeZone;
}

interface Brand {
  name: string;
}

interface CategorySet {
  id: number;
}

interface Classification {
  code: string;
  names: Name[];
}

interface Name {
  nameLocale: string;
  name: string;
}

interface OpeningHours {
  mode: string;
  timeRanges: TimeRange[];
}

interface TimeRange {
  startTime: Time;
  endTime: Time;
}

interface Time {
  date: Date;
  hour: number;
  minute: number;
}

interface TimeZone {
  ianaId: string;
}

interface RelatedPois {
  relationType: string;
  id: string;
}

interface Viewport {
  topLeftPoint: GeoBias;
  btmRightPoint: GeoBias;
}

interface Summary {
  query: string;
  queryType: string;
  queryTime: number;
  numResults: number;
  offset: number;
  totalResults: number;
  fuzzyLevel: number;
  geoBias: GeoBias;
  queryIntent: QueryIntent[];
}

interface QueryIntent {
  type: string;
  details: {};
}
