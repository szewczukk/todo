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
			<Grid item style={{ width: 450 }} xs={6}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Description</TableCell>
								<TableCell>Done?</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableCell>{task.description}</TableCell>
							<TableCell>{task.done ? 'Yes' : 'No'}</TableCell>
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
