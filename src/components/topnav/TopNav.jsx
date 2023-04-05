import React from 'react';

import './topnav.css';

import { Link } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown';

import ThemeMenu from '../thememenu/ThemeMenu';

import user_image from '../../assets/images/user.png';

import user_menu from '../../assets/JsonData/user_menus.json';
import { useDispatch } from 'react-redux';
import { fetchSearchValue } from '../../redux/actions';

const curr_user = {
	display_name: 'John Doe',
	image: user_image,
};

const renderUserToggle = (user) => (
	<div className='topnav__right-user'>
		<div className='topnav__right-user__image'>
			<img src={user.image} alt='' />
		</div>
		<div className='topnav__right-user__name'>{user.display_name}</div>
	</div>
);

const renderUserMenu = (item, index) => (
	<Link to='/' key={index}>
		<div className='notification-item'>
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	</Link>
);

const Topnav = () => {

	const dispatch = useDispatch();

	const search_val = (e) => {
		const search = e.target.value;
		dispatch(fetchSearchValue(search));

		// console.log('search:', search);
	}

	return (
		<>
			<div className='topnav'>
				<div className='topnav__search'>
					<input type='text' placeholder='Search here...' onChange={search_val} />
					<i className='bx bx-search'></i>
				</div>
				<div className='topnav__right'>
					<div className='topnav__right-item'>
						{/* dropdown here */}
						<Dropdown
							customToggle={() => renderUserToggle(curr_user)}
							contentData={user_menu}
							renderItems={(item, index) => renderUserMenu(item, index)}
						/>
					</div>
					<div className='topnav__right-item'>
						<ThemeMenu />
					</div>
				</div>
			</div>
		</>
	);
};

export default Topnav;
