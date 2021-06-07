describe('Task list page testing', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('The navigation contains a link to all tasks page screen', () => {
		cy.get('[data-testid="navigation"]').should('contain', 'List of tasks');
	});

	it('The page should contain info about lack of the tasks', () => {
		cy.get('[data-testid="navigation"]').contains('List of tasks').click();

		cy.get('[data-testid="main"]').should('contain', 'There are no tasks yet');
	});

	it('The page should contain form and it should perform well', () => {
		cy.get('[data-testid="navigation"]').contains('List of tasks').click();

		cy.get('[data-testid="name"]').type('hello');
		cy.get('[data-testid="description"]').type('world');
		cy.get('[data-testid="taskForm"]').submit();

		cy.get('[data-testid="table"]')
			.should('contain', 'hello')
			.and('contain', 'world');

		cy.get('[data-testid="navigation"]').should('contain', 'hello');
	});
});
