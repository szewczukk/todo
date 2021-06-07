import { Button, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../store';
import { actions as taskActions } from '../store/taskSlice';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router';

interface Props {
	id?: string;
	description?: string;
	edit: boolean;
}

const TaskForm = ({ id, description, edit }: Props) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const formik = useFormik({
		initialValues: { description: description ?? '' },
		validate: (values) => {
			if (!values.description) {
				return { description: 'Description cannot be empty!' };
			}
		},
		onSubmit: (values, { resetForm }) => {
			resetForm();
			if (!edit) {
				dispatch(
					taskActions.createTask({ ...values, done: false, id: uuid() }),
				);
			} else if (id) {
				dispatch(taskActions.editTask({ ...values, id }));
				history.push(`/list/${id}`);
			}
		},
	});

	return (
		<>
			<Typography paragraph>Create your task here</Typography>
			<form onSubmit={formik.handleSubmit} data-testid="taskForm">
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

				<Button type="submit">Create the task</Button>
			</form>
		</>
	);
};

export default TaskForm;
