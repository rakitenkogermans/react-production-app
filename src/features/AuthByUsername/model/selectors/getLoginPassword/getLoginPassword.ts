import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';
import { type LoginSchema } from '../../types/loginSchema';

export const getLoginPassword = createSelector(
    getLoginState,
    (login: LoginSchema) => login.password
);
