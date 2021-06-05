describe('Welcome screen testing', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('The navigation contains a link to welcome screen', () => {
		cy.get('[data-testid="navigation"]').should('contain', 'Welcome');
	});
	it('The site contains a heading', () => {
		cy.get('[data-testid="heading"]').should(
			'contain.text',
			'Choose a page from the navigation on left',
		);
	});
});
