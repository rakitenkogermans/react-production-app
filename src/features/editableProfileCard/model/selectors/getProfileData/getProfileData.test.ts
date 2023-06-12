import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData', () => {
    test('should return profile data', () => {
        const data = {
            username: 'admin',
            age: 23,
            country: Country.Latvia,
            currency: Currency.EUR,
            firstname: 'qwerty',
            lastname: 'qwerty',
            city: 'Riga',
            avatar: '',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
