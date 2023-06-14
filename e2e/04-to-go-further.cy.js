import {verifyChildByTestId} from "./testHelper";

describe('To Go Further', () => {
    beforeEach(() => {
        cy.intercept("GET", "https://e2e-test-quest.github.io/weather-app/assets/data/mock.json", {
            fixture: "mockTown.json",
        });
    });

    it('villes disponibles avec mock', () => {
        cy.visit('/');
        cy.get('[data-testid="start-button"]').click();

        cy.get('[data-testid="town-search"]').type('i');
        cy.get('[data-testid="town-filter"]').click();

        verifyChildByTestId("available-towns", ['Saint-Denis']);
    })
});