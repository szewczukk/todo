import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../store';

interface RouterParams {
	id: string;
}

const PreviewTaskPage = () => {
	const { id } = useParams<RouterParams>();
	const task = useAppSelector((state) => state.tasks).find(
		(task) => task.id === id,
	);

	if (!task) {
		return <Typography paragraph>Not found</Typography>;
	}

	return <Typography paragraph>{task?.description}</Typography>;
};

export default PreviewTaskPage;
