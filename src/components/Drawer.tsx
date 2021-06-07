import React from 'react';
import {
	createStyles,
	Drawer as MaterialDrawer,
	Hidden,
	makeStyles,
	Toolbar,
} from '@material-ui/core';
import DrawerContent from './DrawerContent';
import { useAppDispatch, useAppSelector } from '../store';
import { actions as drawerActions } from '../store/drawerSlice';

const useStyles = makeStyles(() =>
	createStyles({
		drawer: { width: 240, flexShrink: 0 },
		drawerPaper: { width: 240 },
	}),
);

const Drawer = () => {
	const dispatch = useAppDispatch();
	const { open } = useAppSelector((state) => state.drawer);
	const classes = useStyles();

	const container =
		window !== undefined ? () => window.document.body : undefined;

	const toggleDrawer = () => {
		dispatch(drawerActions.toggleOpenness());
	};

	return (
		<>
			<Hidden xsDown implementation="css">
				<MaterialDrawer
					open
					variant="permanent"
					anchor="left"
					className={classes.drawer}
					classes={{ paper: classes.drawerPaper }}
					data-testid="navigation"
				>
					<Toolbar />
					<DrawerContent />
				</MaterialDrawer>
			</Hidden>
			<Hidden smUp implementation="css">
				<MaterialDrawer
					container={container}
					variant="temporary"
					anchor={'left'}
					open={open}
					onClose={toggleDrawer}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}
				>
					<Toolbar />
					<DrawerContent />
				</MaterialDrawer>
			</Hidden>
		</>
	);
};

export default Drawer;
