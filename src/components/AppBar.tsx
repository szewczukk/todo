import React from 'react';
import {
	AppBar as MaterialAppBar,
	createStyles,
	IconButton,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useAppDispatch } from '../store';
import { actions as drawerActions } from '../store/drawerSlice';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: { zIndex: theme.zIndex.drawer + 1 },
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				display: 'none',
			},
		},
	}),
);

const AppBar = () => {
	const classes = useStyles();
	const dispatch = useAppDispatch();

	const toggleDrawer = () => {
		dispatch(drawerActions.toggleOpenness());
	};

	return (
		<MaterialAppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={toggleDrawer}
					className={classes.menuButton}
				>
					<Menu />
				</IconButton>
				<Typography variant="h6" component="h1" noWrap>
					Todo app
				</Typography>
			</Toolbar>
		</MaterialAppBar>
	);
};

export default AppBar;
