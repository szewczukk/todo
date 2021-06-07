import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
	<Helmet>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
		/>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/icon?family=Material+Icons"
		/>
		<title>Todo App</title>
		<meta
			name="description"
			content="A simple todo app created on the purposes of a recrutation"
		/>
	</Helmet>
);

export default Head;
