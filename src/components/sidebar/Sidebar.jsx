import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import './sidebar.css';

import logo from '../../assets/images/logo.png';

// import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { NavLink } from 'react-router-dom';

const SidebarItem = (props) => {
	const active = props.active ? 'active' : '';

	return (
		<div className='sidebar__item'>
			<div className={`sidebar__item-inner ${active}`}>
				<i className={props.icon}></i>
				<span>{props.title}</span>
			</div>
		</div>
	);
};

const Sidebar = (props) => {
	const navigate = useNavigate();
	// const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
	const logout_btn = () => {
		// console.log('Logout...');
		localStorage.removeItem('isLoggedIn');
		navigate('/login');
		const layout__content = (document.getElementsByClassName(
			'layout__content'
		)[0].style.paddingLeft = 0);
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__logo'>
				<img src={logo} alt='company logo' />
			</div>
			{localStorage.getItem('isLoggedIn') ? (
				<>
					<NavLink to='/'>
						<SidebarItem title='Dashboard' icon='bx bxs-dashboard' />
					</NavLink>
					<NavLink to='/users'>
						<SidebarItem title='Users' icon='bx bx-user-pin' />
					</NavLink>
					<NavLink to='/posts'>
						<SidebarItem title='Posts' icon='bx bx-list-ol' />
					</NavLink>
					<NavLink to='/maps'>
						<SidebarItem title='Maps' icon='bx bxs-map-pin' />
					</NavLink>
					<NavLink to='/emoji'>
						<SidebarItem title='Emoji' icon='bx bx-category-alt' />
					</NavLink>
					<Link to='/login' onClick={logout_btn}>
						<SidebarItem title='logout' icon='bx bx-log-out' />
					</Link>
				</>
			) : (
				<>
					<NavLink to='/login'>
						<SidebarItem title='Login' icon='bx bx-log-in' />
					</NavLink>
					<NavLink to='/register'>
						<SidebarItem title='Register' icon='bx bxs-edit' />
					</NavLink>
				</>
			)}
			{/* {sidebar_items.map((item, index) => (
				<NavLink to={item.route} key={index}>
					<SidebarItem
						title={item.display_name}
						icon={item.icon}
						// active={index === activeItem}
					/>
				</NavLink>
			))} */}
		</div>

		// <div className='sidebar'>
		// 	<div className='sidebar__logo'>
		// 		<img src={logo} alt='company logo' />
		// 	</div>
		// 	{sidebar_items.map((item, index) => (
		// 		<NavLink to={item.route} key={index}>
		// 			<SidebarItem
		// 				title={item.display_name}
		// 				icon={item.icon}
		// 				// active={index === activeItem}
		// 			/>
		// 		</NavLink>
		// 	))}
		// 	<Link to='/login' onClick={logout_btn}>
		// 		<SidebarItem title='logout' icon='bx bx-cog' />
		// 	</Link>
		// </div>
	);
};

export default Sidebar;
