import {
	createStyles,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from '@material-ui/core';
import { FormatListBulleted, Home, Assignment } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store';

const useStyles = makeStyles(() =>
	createStyles({
		drawerContainer: { overflow: 'auto' },
		link: { color: 'inherit', textDecoration: 'none' },
	}),
);

const DrawerContent = () => {
	const classes = useStyles();
	const { pathname } = useLocation();
	const { tasks } = useAppSelector((store) => store);

	return (
		<div className={classes.drawerContainer}>
			<List>
				<Link to="/" className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<Home color={pathname === '/' ? 'primary' : 'inherit'} />
						</ListItemIcon>
						<ListItemText>Welcome</ListItemText>
					</ListItem>
				</Link>
				<Divider />
				<Link to="/list" className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<FormatListBulleted
								color={pathname === '/list' ? 'primary' : 'inherit'}
							/>
						</ListItemIcon>
						<ListItemText>List of tasks</ListItemText>
					</ListItem>
				</Link>
				{tasks.map((task) => (
					<Link to={`/list/${task.id}`} className={classes.link} key={task.id}>
						<ListItem button>
							<ListItemIcon>
								<Assignment
									color={
										pathname.split('/').includes(task.id)
											? 'primary'
											: 'inherit'
									}
								/>
							</ListItemIcon>
							<ListItemText>{task.name}</ListItemText>
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);
};

export default DrawerContent;
