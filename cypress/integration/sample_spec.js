describe('can type in text box', function () {
    it('text box can be typed in', function () {
        cy.visit("index.html/pizza");
        cy.get('textarea').type('Hello World');
    })
})
describe('able to check multiple boxes', function () {
    it('can check more than 1 box', function () {
        cy.visit("index.html/pizza");
        cy.get('[type="checkbox"]').check();
    })
})
describe('able to submit', function () {
    it('can click submit button', function () {
        cy.visit("index.html/pizza");
        cy.get('form').submit();
    })
})