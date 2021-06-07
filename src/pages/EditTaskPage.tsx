import { Typography } from '@material-ui/core';
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
		<>
			<Typography paragraph>Edit your task here</Typography>
			<TaskForm edit={true} id={id} description={task.description} />
		</>
	);
};

export default EditTaskPage;
