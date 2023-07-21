describe('User visits profile page', () => {
    let profileId = '';
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit('profile/' + data.id);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('And profile successfully loads', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('And edit it', () => {
        const newFirstname = 'newFirstname';
        const newLastname = 'newLastname';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
