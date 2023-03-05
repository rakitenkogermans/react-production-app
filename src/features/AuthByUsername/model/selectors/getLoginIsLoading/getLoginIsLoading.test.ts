import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return login isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: false }
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
