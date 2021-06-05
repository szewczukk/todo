import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Head from './components/Head';
import WelcomeScreen from './pages/Welcome';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: { display: 'flex' },
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	}),
);

function App() {
	const classes = useStyles();

	return (
		<>
			<Head />
			<BrowserRouter>
				<div className={classes.root}>
					<Drawer />
					<main className={classes.content}>
						<Switch>
							<Route path="/" exact>
								<WelcomeScreen />
							</Route>
						</Switch>
					</main>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
