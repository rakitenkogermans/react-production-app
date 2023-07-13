import { type StateSchema } from '@/app/providers/StoreProvider';

import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'qwerty',
                password: '12345678',
                error: 'error',
                isLoading: false,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'qwerty',
            password: '12345678',
            error: 'error',
            isLoading: false,
        });
    });
});
