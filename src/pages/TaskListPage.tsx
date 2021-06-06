import { Grid } from '@material-ui/core';
import React from 'react';
import CreateTaskForm from '../components/CreateTaskForm';
import TaskTable from '../components/TaskTable';

const TaskListPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<TaskTable />
			</Grid>
			<Grid item xs={12} md={6}>
				<CreateTaskForm />
			</Grid>
		</Grid>
	);
};

export default TaskListPage;
