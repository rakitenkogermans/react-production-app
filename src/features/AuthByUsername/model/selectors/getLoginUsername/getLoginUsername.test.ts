import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return login username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'qwerty' }
        };
        expect(getLoginUsername(state as StateSchema)).toBe('qwerty');
    });
});
