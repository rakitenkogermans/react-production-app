import { fetchProfileData } from './fetchProfileData';
import { TestAsynkThunk } from 'shared/lib/tests/TestAsynkThunk/TestAsynkThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failed', async () => {
        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
