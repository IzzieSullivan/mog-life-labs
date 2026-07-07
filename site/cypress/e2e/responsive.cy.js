const viewports = [
  { label: 'mobile', width: 375, height: 812 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'desktop', width: 1280, height: 900 },
];

describe('responsive landing page', () => {
  viewports.forEach(({ label, width, height }) => {
    it(`has no horizontal overflow on ${label}`, () => {
      cy.viewport(width, height);
      cy.visit('/');

      cy.contains('h1', 'Look like').should('be.visible');
      cy.contains('Receipts, not').should('be.visible');
      cy.contains('Apply.').should('be.visible');
      cy.window().then((win) => {
        expect(win.document.documentElement.scrollWidth).to.be.lte(width);
      });
    });
  });

  it('uses the mobile nav menu below the tablet breakpoint', () => {
    cy.viewport(375, 812);
    cy.visit('/');

    cy.get('button[aria-label="Open menu"]').as('toggle');
    cy.get('@toggle').should('have.attr', 'aria-expanded', 'false');
    cy.get('@toggle').click();
    cy.contains('a', 'About Brian').should('be.visible').click();
    cy.get('button[aria-label="Open menu"]').should(
      'have.attr',
      'aria-expanded',
      'false'
    );
  });

  it('keeps the application form usable on mobile', () => {
    cy.viewport(390, 844);
    cy.visit('/');

    cy.get('input[name="name"]').type('Jane Doe');
    cy.get('input[name="email"]').type('jane@example.com');
    cy.contains('button', 'Send My Application').click();
    cy.contains("Something didn't go through").should('be.visible');
  });
});
