import { CountryCode } from '../types/countryCode';
import { CONFIG } from './config';
import { getPlaceAutocomplete } from './maps-api'

export async function getAutoCompleteDetails(address: string) {
    const apiKey = CONFIG.TOMTOM_API_KEY;
    // get autocomplete results
    const rawResults = await getPlaceAutocomplete(apiKey, address, {
        countrySet: [CountryCode.Australia],
        limit: 100
    });

    // map results to required type
    return rawResults.map(result => ({
        placeId: result.id,
        streetNumber: result.address.streetNumber,
        countryCode: result.address.countryCode,
        country: result.address.country,
        freeformAddress: result.address.freeformAddress,
        municipality: result.address.municipality
    }));
}
