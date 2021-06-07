describe('Task list page testing', () => {
	before(() => {
		cy.visit('http://localhost:3000/');
	});

	it('The page should render a table with the info about the task', () => {
		cy.get('[data-testid="navigation"]').contains('List of tasks').click();
		cy.get('[data-testid="name"]').type('hello');
		cy.get('[data-testid="description"]').type('world');
		cy.get('[data-testid="taskForm"]').submit();

		cy.get('[data-testid="main"]')
			.contains('hello')
			.parent()
			.contains('Preview')
			.click();

		cy.get('[data-testid="main"]')
			.should('contain', 'hello')
			.and('contain', 'world');
	});

	it('Marking the task as complete', () => {
		cy.get('[data-testid="toggleCompletion"]').click();
		cy.get('[data-testid="main"]').should('contain', 'Yes');
	});
});
