import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    id: 'TESTING_ARTICLE',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2022?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1546,
    createdAt: '26.09.2023',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: { Authorization: 'asads' },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asads' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
