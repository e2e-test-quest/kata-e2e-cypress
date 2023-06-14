import {verifyChildByTestId} from "./testHelper";

describe('To Go Further', () => {
    beforeEach(() => {
        cy.intercept("GET", "https://e2e-test-quest.github.io/weather-app/assets/data/mock.json", {
            fixture: "mockTown.json",
        });
    });

    it('villes disponibles avec mock', () => {
        cy.visit('/?isStarted=true');

        cy.getByTestId("town-search").type('i');
        cy.getByTestId("town-filter").click();

        verifyChildByTestId("available-towns", ['Saint-Denis']);
    })
});