import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return login error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' }
        };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });
});
