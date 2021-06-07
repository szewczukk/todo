import React from 'react';
import {
	createStyles,
	Drawer as MaterialDrawer,
	makeStyles,
	Toolbar,
} from '@material-ui/core';
import DrawerContent from './DrawerContent';

const useStyles = makeStyles(() =>
	createStyles({
		drawer: { width: 240, flexShrink: 0 },
		drawerPaper: { width: 240 },
	}),
);

const Drawer = () => {
	const classes = useStyles();

	return (
		<MaterialDrawer
			variant="permanent"
			anchor="left"
			className={classes.drawer}
			classes={{ paper: classes.drawerPaper }}
			data-testid="navigation"
		>
			<Toolbar />
			<DrawerContent />
		</MaterialDrawer>
	);
};

export default Drawer;
