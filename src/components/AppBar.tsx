import React from 'react';
import {
	AppBar as MaterialAppBar,
	createStyles,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: { zIndex: theme.zIndex.drawer + 1 },
	}),
);

const AppBar = () => {
	const classes = useStyles();

	return (
		<MaterialAppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" component="h1" noWrap>
					Todo app
				</Typography>
			</Toolbar>
		</MaterialAppBar>
	);
};

export default AppBar;
