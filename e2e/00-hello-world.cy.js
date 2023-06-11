describe('Hello World', () => {
    it('should be trusty', () => {
        cy.visit('/');
        expect(true).to.be.false;
    })
});