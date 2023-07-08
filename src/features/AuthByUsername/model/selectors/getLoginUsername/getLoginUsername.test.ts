import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return login username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'qwerty' },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('qwerty');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
