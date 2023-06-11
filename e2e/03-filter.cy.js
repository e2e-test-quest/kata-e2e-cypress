import { verifyChildByTestId } from "./testHelper";

describe('Filter', () => {
    it('should display correct town list when search is "i"', () => {
        cy.visit('/?isStarted=true');
        cy.get('[data-testid="town-search"]').type('i');
        cy.get('[data-testid="town-filter"]').click();

        verifyChildByTestId("available-towns", ['Tunis', 'Limoges']);
    })
});