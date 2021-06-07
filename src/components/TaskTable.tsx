import {
	Paper,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	TableCell,
	TableBody,
	Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../store';

const TaskTable = () => {
	const { tasks } = useAppSelector((store) => store);

	if (!tasks.length) {
		return <Typography paragraph>There are no tasks yet</Typography>;
	}

	return (
		<TableContainer component={Paper} data-testid="table">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>N</TableCell>
						<TableCell>Description</TableCell>
						<TableCell>Done?</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tasks.map((task, idx) => (
						<TableRow key={task.id}>
							<TableCell>{idx + 1}</TableCell>
							<TableCell>{task.description}</TableCell>
							<TableCell>{task.done ? 'Yes' : 'No'}</TableCell>
							<TableCell>
								<Button component={Link} to={`/list/${task.id}`}>
									Preview
								</Button>
								<Button component={Link} to={`/list/${task.id}/edit`}>
									Edit
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TaskTable;
