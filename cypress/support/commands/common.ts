import { LOCAL_STORAGE_USER_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username: string = 'testuser', password: string = '123') => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8880/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(body));
            return body;
        });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;

            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
