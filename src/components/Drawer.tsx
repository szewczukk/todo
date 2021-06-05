import React from 'react';
import {
	createStyles,
	Drawer as MaterialDrawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(() =>
	createStyles({
		drawer: { width: 240, flexShrink: 0 },
		drawerPaper: { width: 240 },
		drawerContainer: { overflow: 'auto' },
		link: { color: 'inherit', textDecoration: 'none' },
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
			<div className={classes.drawerContainer}>
				<List>
					<Link to="/" className={classes.link}>
						<ListItem button>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText>Welcome</ListItemText>
						</ListItem>
					</Link>
				</List>
			</div>
		</MaterialDrawer>
	);
};

export default Drawer;
