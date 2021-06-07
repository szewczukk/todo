import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskTable from '../components/TaskTable';

const TaskListPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h5" component="h2" data-testid="heading">
					List of all tasks
				</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<TaskTable />
			</Grid>
			<Grid item xs={12} md={6}>
				<TaskForm edit={false} />
			</Grid>
		</Grid>
	);
};

export default TaskListPage;
