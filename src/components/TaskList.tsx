import { Typography } from '@material-ui/core';
import React from 'react';
import { useAppSelector } from '../store';

const TaskList = () => {
	const { tasks } = useAppSelector((store) => store);

	if (!tasks.length) {
		return <Typography paragraph>There are no tasks yet</Typography>;
	}

	return <Typography paragraph>tasks</Typography>;
};

export default TaskList;
