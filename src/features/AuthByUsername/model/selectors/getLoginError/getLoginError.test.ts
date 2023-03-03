import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return login error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'qwerty', password: '12345678', error: 'error', isLoading: false }
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
});
