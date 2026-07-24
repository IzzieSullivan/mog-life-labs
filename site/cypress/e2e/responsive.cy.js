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

  it('aligns the desktop nav CTA with the content frame', () => {
    cy.viewport(1280, 900);
    cy.visit('/');

    cy.get('.hero').then(($hero) => {
      cy.get('.btn--nav').then(($button) => {
        const heroRight = Math.round($hero[0].getBoundingClientRect().right);
        const buttonRight = Math.round($button[0].getBoundingClientRect().right);

        expect(buttonRight).to.equal(heroRight);
      });
    });
  });

  it('uses the mobile nav menu below the tablet breakpoint', () => {
    cy.viewport(375, 812);
    cy.visit('/');

    cy.get('button[aria-label="Open menu"]').as('toggle');
    cy.get('@toggle').should('have.attr', 'aria-expanded', 'false');
    cy.get('@toggle').click();
    cy.contains('a', 'Transformations').should('have.focus');
    cy.contains('a', 'About Brian').should('be.visible').click();
    cy.get('button[aria-label="Open menu"]').should(
      'have.attr',
      'aria-expanded',
      'false'
    );
  });

  it('supports keyboard navigation and visible focus', () => {
    cy.viewport(375, 812);
    cy.visit('/');

    cy.contains('a', 'Skip to main content').focus().should('have.focus');
    cy.get('button[aria-label="Open menu"]').click();
    cy.contains('a', 'Transformations').should('have.focus');
    cy.focused().type('{esc}');
    cy.get('button[aria-label="Open menu"]').should('have.focus');
  });

  it('submits the application form successfully on mobile', () => {
    cy.viewport(390, 844);
    cy.intercept('POST', 'https://formspree.io/f/test-form', {
      statusCode: 200,
      body: { ok: true },
    }).as('submitApplication');
    cy.visit('/');

    cy.get('input[name="name"]').type('Jane Doe');
    cy.get('input[name="email"]').type('jane@example.com');
    cy.contains('button', 'Send My Application').click();
    cy.wait('@submitApplication')
      .its('request.body')
      .should('include', 'New MOG LIFE LABS coaching application');
    cy.contains('Expect to hear from me within 48 hours').should('be.visible');
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
  });
});
