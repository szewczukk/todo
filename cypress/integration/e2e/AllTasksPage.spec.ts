describe('All tasks page testing', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('The navigation contains a link to all tasks page screen', () => {
		cy.get('[data-testid="navigation"]')
			.should('contain', '[data-testid="taskslist"]')
			.should('contain', 'List of tasks');
	});

	it('The page should contain info about lack of the tasks', () => {
		cy.get('[data-testid="taskslist"]').click();

		cy.should('contain', 'There are no tasks yet').should(
			'contain',
			'[data-testid="createTaskForm"]',
		);
	});
});
