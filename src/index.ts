import { AutocompleteDetails } from '../types';
import { CountryCode } from '../types/countryCode';
import { CONFIG } from './config';
import { getPlaceAutocomplete } from './maps-api'

export async function getAutoCompleteDetails(address: string): Promise<AutocompleteDetails[]> {
    const apiKey = CONFIG.TOMTOM_API_KEY;
    // get autocomplete results
    const rawResults = await getPlaceAutocomplete(apiKey, address, {
        countrySet: [CountryCode.Australia],
        limit: 100
    });

    // map results to required type
    return rawResults.map<AutocompleteDetails>(result => ({
        placeId: result.id,
        streetNumber: result.address.streetNumber,
        countryCode: result.address.countryCode as CountryCode,
        country: result.address.country,
        freeformAddress: result.address.freeformAddress,
        municipality: result.address.municipality
    }));
}
