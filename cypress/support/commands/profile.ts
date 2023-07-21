export const updateProfile = (newFirstname: string, newLastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(newFirstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(newLastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asads' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'user',
            age: 23,
            currency: 'USD',
            country: 'Lithuania',
            city: 'Riga',
            username: 'testuser',
            avatar: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(newFirstname: string, newLastname: string): Chainable<void>;

            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
