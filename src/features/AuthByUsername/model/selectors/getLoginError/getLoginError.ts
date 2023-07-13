import { createSelector } from '@reduxjs/toolkit';

import { type LoginSchema } from '../../types/loginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = createSelector(getLoginState, (login: LoginSchema) => login?.error);
