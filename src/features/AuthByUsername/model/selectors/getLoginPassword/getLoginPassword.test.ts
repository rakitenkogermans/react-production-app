import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return login password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'qwerty', password: '12345678', error: 'error', isLoading: false }
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12345678');
    });
});
