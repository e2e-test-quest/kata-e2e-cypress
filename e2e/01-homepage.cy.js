describe('Homepage', () => {
    it('should be contains title and Get Started button', () => {
        cy.visit('/');
        cy.get('[data-testid="app-title"').should('have.text', 'Welcome to Weather App');
        cy.get('[data-testid="start-button"').should('have.text', 'Get started');
    })
});