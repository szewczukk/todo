import { Button, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { actions as taskActions } from '../store/taskSlice';

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

	const history = useHistory();
	const dispatch = useAppDispatch();
	const formik = useFormik({
		initialValues: { description: task.description },
		validate: (values) => {
			if (!values.description) {
				return { description: 'Description cannot be empty!' };
			}
		},
		onSubmit: (values, { resetForm }) => {
			resetForm();
			dispatch(taskActions.editTask({ ...values, id }));
			history.push(`/list/${id}`);
		},
	});

	return (
		<>
			<Typography paragraph>Edit your task here</Typography>
			<form onSubmit={formik.handleSubmit} data-testid="editTaskForm">
				<TextField
					label="Task description"
					id="description"
					name="description"
					value={formik.values.description}
					onChange={formik.handleChange}
					required
					error={!!formik.errors.description}
					helperText={formik.errors.description}
					data-testid="description"
				/>

				<Button type="submit">Edit the task</Button>
			</form>
		</>
	);
};

export default EditTaskPage;
