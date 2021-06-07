import {
	Button,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
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
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h5" component="h2">
					Preview of the selected task
				</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Description</TableCell>
								<TableCell>Date of creation</TableCell>
								<TableCell>Done?</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>{task.name}</TableCell>
								<TableCell>{task.description}</TableCell>
								<TableCell>
									{new Date(task.timestamp).toLocaleString()}
								</TableCell>
								<TableCell>{task.done ? 'Yes' : 'No'}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
			<Grid item xs={12}>
				<Button onClick={toggleCompletion} data-testid="toggleCompletion">
					Mark as {task.done && 'in'}complete
				</Button>
				<Button component={Link} to={`/list/${task.id}/edit`}>
					Edit
				</Button>
			</Grid>
		</Grid>
	);
};

export default PreviewTaskPage;
