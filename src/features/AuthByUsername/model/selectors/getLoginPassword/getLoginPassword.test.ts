import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return login password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '12345678' }
        };
        expect(getLoginPassword(state as StateSchema)).toBe('12345678');
    });
});
