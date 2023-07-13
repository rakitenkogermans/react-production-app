import { type StateSchema } from '@/app/providers/StoreProvider';

import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateErrors', () => {
    test('should return profile validateError', () => {
        const validateError = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.NO_DATA,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
