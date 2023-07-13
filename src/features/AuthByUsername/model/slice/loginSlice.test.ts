import { loginActions, loginReducer } from '../slice/loginSlice';
import { type LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('12345678'))).toEqual({
            username: '12345678',
        });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345678'))).toEqual({
            password: '12345678',
        });
    });
});
