import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const form = {
            username: 'admin',
            age: 23,
            country: Country.Latvia,
            currency: Currency.EUR,
            firstname: 'qwerty',
            lastname: 'qwerty',
            city: 'Riga',
            avatar: ''
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form
            }
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
