import { describe } from '@jest/globals'
import { getPlaceAutocomplete } from '../src/maps-api'
import { getAutoCompleteDetails } from '../src'
import { CONFIG } from '../src/config'
import { CountryCode } from '../types/countryCode'

// These are end-to-end tests and need an api key
describe('Tomtom Places E2E Tests', () => {
    describe('getAutoCompleteDetails', () => {
        it ('returns a promise', () => {
            const res = getAutoCompleteDetails('Charlotte Street')
            expect(res).toBeInstanceOf(Promise)
        })

        it('can fetch from the autocomplete api', async () => {
            const res = await getAutoCompleteDetails('Charlotte Street')
            const firstRes = res[0];
            expect(firstRes).toHaveProperty('placeId')
            expect(firstRes).toHaveProperty('streetNumber')
            expect(firstRes).toHaveProperty('countryCode')
            expect(firstRes).toHaveProperty('country')
            expect(firstRes).toHaveProperty('freeformAddress')
            expect(firstRes).toHaveProperty('municipality')
        })

        it('only returns Australian results', async () => {
            const res = await getAutoCompleteDetails('Queen Street');
            for (const item of res) {
                expect(item.countryCode).toBe(CountryCode.Australia);
                expect(item.country).toBe('Australia');
            }
        })
    })

    describe('getPlaceAutocomplete', () => {
        const apiKey = CONFIG.TOMTOM_API_KEY;
        
        it('handles no results', async () => {
            const res = await getPlaceAutocomplete(apiKey, 'asfasffasfasafsafs');
            expect(res).toStrictEqual([])
        })

        it('limits number of results according to config', async () => {
            const promise = getPlaceAutocomplete(apiKey, 'Charlotte Street', {limit: 1});
            await expect(promise).resolves.toHaveLength(1);
        })

        it('limits countries according to config', async () => {
            const countrySet = [CountryCode.UnitedKingdom, CountryCode.NewZealand];
            const res = await getPlaceAutocomplete(apiKey, 'Charlotte Street', { countrySet });

            for (const item of res) {
                expect(countrySet).toContain(item.address.countryCode);
            }
        })

        it('handles error', async () => {
            expect(getPlaceAutocomplete(apiKey, '')).rejects.toThrow()
        })
    })

})
