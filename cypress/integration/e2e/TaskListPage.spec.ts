describe('Task list page testing', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('The navigation contains a link to all tasks page screen', () => {
		cy.get('[data-testid="navigation"]').should('contain', 'List of tasks');
	});

	it('The page should contain info about lack of the tasks', () => {
		cy.get('[data-testid="taskslist"]').click();

		cy.get('[data-testid="main"]').should('contain', 'There are no tasks yet');
	});

	it('The page should contain form and it should perform well', () => {
		cy.get('[data-testid="taskslist"]').click();

		cy.get('[data-testid="createTaskForm"]')
			.should('contain', 'Create the task')
			.should('contain', 'Task description');

		cy.get('[data-testid="description"]').type('Hello, world!');
		cy.get('[data-testid="createTaskForm"]').submit();

		cy.get('[data-testid="description"]').should('have.value', '');

		cy.get('[data-testid="table"]').should('contain', 'Hello, world!');
		cy.get('[data-testid="navigation"]').should('contain', 'Task no 1');
	});
});
