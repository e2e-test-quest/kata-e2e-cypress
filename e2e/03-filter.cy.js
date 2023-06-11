describe('Filter', () => {
    it('should display correct town list when search is "i"', () => {
        cy.visit('/?isStarted=true');
        cy.get('[data-testid="town-search"]').type('i');
        cy.get('[data-testid="town-filter"]').click();

        const TOWNS = ['Tunis', 'Limoges'];
        cy.get('[data-testid="available-towns"]')
            .children()
            .should('have.length', TOWNS.length)
            .each((town, index) => {
                expect(town.text()).to.equal(TOWNS[index]);
                index++;
            });
    })
});