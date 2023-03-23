import { updateProfileData } from './updateProfileData';
import { TestAsynkThunk } from 'shared/lib/tests/TestAsynkThunk/TestAsynkThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';

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

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsynkThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failed', async () => {
        const thunk = new TestAsynkThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new TestAsynkThunk(updateProfileData, {
            profile: {
                form: { ...data, firstname: '' },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
