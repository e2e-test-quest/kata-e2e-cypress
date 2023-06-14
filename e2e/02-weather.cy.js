import { verifyChildByTestId } from "./testHelper";

describe('Weather', () => {
    it('should be display nothing when no town is selected', () => {
        cy.visit('/');
        cy.getByTestId("start-button").click();

        cy.getByTestId("weather-details-empty").should('have.text', 'Nothing to display');
    })

    it('should display correct town list', () => {
        cy.visit('/');
        cy.getByTestId("start-button").click();

        verifyChildByTestId("available-towns", ['Douala', 'Tunis', 'Limoges']);
    })
});