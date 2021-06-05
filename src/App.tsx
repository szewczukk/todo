import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomeScreen from './pages/Welcome';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<WelcomeScreen />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
