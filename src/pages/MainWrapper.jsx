import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topnav from '../components/topnav/TopNav';
// import MainRoutes from '../components/Routes';

const MainWrapper = ({ header, sidebar, children }) => {
	return (
		<>
			{sidebar && <Sidebar />}
			{header && <Topnav />}
			{children}
		</>
	);
};

export default MainWrapper;
