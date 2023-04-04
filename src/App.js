import React from 'react';
// import Sidebar from './components/sidebar/Sidebar';
// import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Topnav from './components/topnav/TopNav';
import MainRoutes from './components/Routes';
import './assets/css/layout.css';
// import Login from './pages/Login';

const App = () => {
	const themeReducer = useSelector((state) => state.ThemeReducer);

	return (
		<>
			<div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
				{/* <Sidebar /> */}
				<div className='layout__content'>
					{/* {<Topnav />} */}
					<div
						id='route_wrapper'
						className='layout__content-main layout__content-table'
					>
						<MainRoutes />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
