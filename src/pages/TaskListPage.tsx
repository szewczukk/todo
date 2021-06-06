import React from 'react';
import CreateTaskForm from '../components/CreateTaskForm';
import TaskTable from '../components/TaskTable';

const TaskListPage = () => (
	<>
		<TaskTable />
		<CreateTaskForm />
	</>
);

export default TaskListPage;
