import React from 'react';
import {
	createStyles,
	Divider,
	Drawer as MaterialDrawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { FormatListBulleted } from '@material-ui/icons';
import { useAppSelector } from '../store';

const useStyles = makeStyles(() =>
	createStyles({
		drawer: { width: 240, flexShrink: 0 },
		drawerPaper: { width: 240 },
		drawerContainer: { overflow: 'auto' },
		link: { color: 'inherit', textDecoration: 'none' },
	}),
);

const Drawer = () => {
	const { pathname } = useLocation();
	const classes = useStyles();
	const { tasks } = useAppSelector((store) => store);

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
								<HomeIcon color={pathname === '/' ? 'primary' : 'inherit'} />
							</ListItemIcon>
							<ListItemText>Welcome</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/list" className={classes.link} data-testid="taskslist">
						<ListItem button>
							<ListItemIcon>
								<FormatListBulleted
									color={pathname === '/list' ? 'primary' : 'inherit'}
								/>
							</ListItemIcon>
							<ListItemText>List of tasks</ListItemText>
						</ListItem>
					</Link>
					{tasks.map((task, idx) => (
						<Link
							to={`/list/${task.id}`}
							className={classes.link}
							key={task.id}
						>
							<ListItem button>
								<ListItemIcon>
									<AssignmentIcon
										color={
											pathname.split('/').includes(task.id)
												? 'primary'
												: 'inherit'
										}
									/>
								</ListItemIcon>
								<ListItemText>Task no {idx + 1}</ListItemText>
							</ListItem>
						</Link>
					))}
				</List>
			</div>
		</MaterialDrawer>
	);
};

export default Drawer;
