import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomeScreen from './pages/Welcome';

function App() {
	return (
		<>
			<Helmet>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Helmet>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<WelcomeScreen />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
