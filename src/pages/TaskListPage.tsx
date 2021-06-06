import React from 'react';
import CreateTaskForm from '../components/CreateTaskForm';
import TaskList from '../components/TaskList';

const TaskListPage = () => (
	<>
		<TaskList />
		<CreateTaskForm />
	</>
);

export default TaskListPage;
