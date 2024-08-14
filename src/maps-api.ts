import axios from 'axios'
import { FuzzySearchResults } from '../types/maps-api';

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string) {
    const autocomplete = await axios.get<FuzzySearchResults>(`https://api.tomtom.com/search/2/search/${address}.json'`, {
        params: {
            key,
            limit: 100,
        }
    });
    return autocomplete.data.results.map((result) => {
        return {
            placeId: result.id,
        }
    })
}
