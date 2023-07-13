import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/providers/StoreProvider';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        // @ts-ignore
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
