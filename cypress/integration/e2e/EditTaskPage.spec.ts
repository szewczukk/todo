describe('Preview page testing', () => {
	before(() => {
		cy.visit('http://localhost:3000/');
	});

	it('The page should render a table with the info about the task', () => {
		cy.get('[data-testid="navigation"]').contains('List of tasks').click();
		cy.get('[data-testid="description"]').type('Hello, world!');
		cy.get('[data-testid="taskForm"]').submit();

		cy.get('[data-testid="main"]')
			.contains('Hello, world!')
			.parent()
			.contains('Edit')
			.click();

		cy.get('[data-testid="description"]').type('{selectall}Goodbye, world!');
		cy.get('[data-testid="taskForm"]').submit();

		cy.get('[data-testid="main"]').should('contain', 'Goodbye, world!');
	});
});
