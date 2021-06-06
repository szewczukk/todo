import { Button, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../store';
import { actions as taskActions } from '../store/taskSlice';

const CreateTaskForm = () => {
	const dispatch = useAppDispatch();
	const formik = useFormik({
		initialValues: { description: '' },
		validate: (values) => {
			if (!values.description) {
				return { description: 'Description cannot be empty!' };
			}
		},
		onSubmit: (values, { resetForm }) => {
			resetForm();
			dispatch(taskActions.createTask({ ...values, done: false }));
		},
	});

	return (
		<>
			<Typography paragraph>Create your task here</Typography>
			<form onSubmit={formik.handleSubmit} data-testid="createTaskForm">
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

export default CreateTaskForm;
