export function verifyChildByTestId(testId, list) {
  return cy.get(`[data-testid=${testId}]`)
    .children()
    .should('have.length', list.length)
    .each((town, index) => {
        expect(town.text()).to.equal(list[index]);
      index++;
    });
}
