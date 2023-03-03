import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return login isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'qwerty', password: '12345678', error: 'error', isLoading: false }
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
