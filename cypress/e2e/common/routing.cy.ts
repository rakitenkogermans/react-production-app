import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User NOT Authorized', () => {
        it('Visit main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Visit profile page and redirecting to main page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Visit not found page', () => {
            cy.visit('/asadadada');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('User  Authorized', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });

        it('Visit profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Visit page with list of articles', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
