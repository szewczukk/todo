import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store';
import { actions as taskActions } from '../store/taskSlice';

interface RouterParams {
	id: string;
}

const PreviewTaskPage = () => {
	const { id } = useParams<RouterParams>();
	const dispatch = useAppDispatch();
	const task = useAppSelector((state) => state.tasks).find(
		(task) => task.id === id,
	);

	const toggleCompletion = () => {
		dispatch(taskActions.toggleComplete(id));
	};

	if (!task) {
		return <Typography paragraph>Not found</Typography>;
	}

	return (
		<>
			<Typography paragraph>{task?.description}</Typography>
			<Button onClick={toggleCompletion}>
				Mark as {task.done && 'in'}complete
			</Button>
		</>
	);
};

export default PreviewTaskPage;
