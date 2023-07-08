import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    test('should return user auth data', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'qwerty', id: '1' } },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({ username: 'qwerty', id: '1' });
    });
});
