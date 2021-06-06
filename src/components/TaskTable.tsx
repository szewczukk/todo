import {
	Paper,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	TableCell,
	TableBody,
} from '@material-ui/core';
import React from 'react';
import { useAppSelector } from '../store';

const TaskTable = () => {
	const { tasks } = useAppSelector((store) => store);

	if (!tasks.length) {
		return <Typography paragraph>There are no tasks yet</Typography>;
	}

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>N</TableCell>
						<TableCell>Description</TableCell>
						<TableCell>Done?</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tasks.map((task, idx) => (
						<TableRow key={idx}>
							<TableCell>{idx + 1}</TableCell>
							<TableCell>{task.description}</TableCell>
							<TableCell>{task.done ? 'Yes' : 'No'}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TaskTable;
