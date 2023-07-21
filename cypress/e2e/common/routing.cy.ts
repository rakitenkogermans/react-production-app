describe('Routing', () => {
    describe('User NOT Authorized', () => {
        it('Visit main page', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Visit profile page and redirecting to main page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Visit not found page', () => {
            cy.visit('/asadadada');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('User  Authorized', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });

        it('Visit profile page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Visit page with list of articles', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
