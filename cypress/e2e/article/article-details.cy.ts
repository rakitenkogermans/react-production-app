let currentArticleId = '';

describe('User visits article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('and sees content of it', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('and sees list of recommendations', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('and leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.wait(1000);
        cy.addComment('text');
        // cy.getByTestId('CommentList').scrollIntoView();
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('and leaves a rating', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true').should('have.length', 4);
    });
});
