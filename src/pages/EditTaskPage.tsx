import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { useAppSelector } from '../store';

interface RouterParams {
	id: string;
}

const EditTaskPage = () => {
	const { id } = useParams<RouterParams>();
	const task = useAppSelector((state) => state.tasks).find(
		(task) => task.id === id,
	);

	if (!task) {
		return <Typography paragraph>The task to be edited not found</Typography>;
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h5" component="h2">
					Edit your task here
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TaskForm edit={true} {...task} />
			</Grid>
		</Grid>
	);
};

export default EditTaskPage;
