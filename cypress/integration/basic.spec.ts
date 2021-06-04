describe('A basic test of a fresh project', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('The site contains a link', () => {
		cy.get('a').contains('Learn React');
	});
});
