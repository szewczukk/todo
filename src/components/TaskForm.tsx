import { Button, Grid, TextField } from '@material-ui/core';
import { FormikErrors, useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../store';
import { actions as taskActions } from '../store/taskSlice';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router';

interface Props {
	id?: string;
	name?: string;
	description?: string;
	edit?: boolean;
}

interface FormValues {
	name: string;
	description: string;
}

const TaskForm = ({ id, name, description, edit }: Props) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const formik = useFormik({
		initialValues: { name: name ?? '', description: description ?? '' },
		validate: (values) => {
			const errors: FormikErrors<FormValues> = {};

			if (!values.name) {
				errors.name = 'Name cannot be empty!';
			}

			return errors;
		},
		onSubmit: (values, { resetForm }) => {
			resetForm();
			if (!edit) {
				dispatch(
					taskActions.createTask({
						...values,
						done: false,
						id: uuid(),
						timestamp: Date.now(),
					}),
				);
			} else if (id) {
				dispatch(taskActions.editTask({ ...values, id }));
				history.push(`/list/${id}`);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} data-testid="taskForm">
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<TextField
						label="Task name"
						id="name"
						name="name"
						value={formik.values.name}
						onChange={formik.handleChange}
						required
						error={!!formik.errors.name}
						helperText={formik.errors.name}
						data-testid="name"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label="Task description"
						id="description"
						name="description"
						value={formik.values.description}
						onChange={formik.handleChange}
						data-testid="description"
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit">Create the task</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default TaskForm;
