import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
import Comments from '../pages/Comments';
import Maps from '../pages/Maps';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRouteHome from './PrivateRouteHome';
import PrivateRouteLogin from './PrivateRouteLogin';
import MainWrapper from '../pages/MainWrapper';
import Emoji from '../pages/Emoji';

const MainRoutes = () => {
	return (
		<Routes>
			<Route
				path='/login'
				element={
					<MainWrapper header={false} sidebar={false}>
						<PrivateRouteHome Comp={Login} />
					</MainWrapper>
				}
			/>
			<Route
				path='/register'
				element={
					<MainWrapper header={false} sidebar={false}>
						<PrivateRouteHome Comp={Register} />
					</MainWrapper>
				}
			/>

			<Route
				path='/'
				element={
					<MainWrapper header={true} sidebar={true}>
						<PrivateRouteLogin Comp={Dashboard} />
					</MainWrapper>
				}
			/>
			<Route
				path='/users'
				element={
					<MainWrapper header={true} sidebar={true}>
						<PrivateRouteLogin Comp={Users} />
					</MainWrapper>
				}
			/>
			<Route
				path='/posts'
				element={
					<MainWrapper header={true} sidebar={true}>
						<PrivateRouteLogin Comp={Posts} />
					</MainWrapper>
				}
			/>
				<Route
					path='/posts/:id/comments'
					element={
						<MainWrapper header={true} sidebar={true}>
							<PrivateRouteLogin Comp={Comments} />
						</MainWrapper>
					}
				/>
			<Route
				path='/maps'
				element={
					<MainWrapper header={true} sidebar={true}>
						<PrivateRouteLogin Comp={Maps} />
					</MainWrapper>
				}
			/>
			<Route
				path='/emoji'
				element={
					<MainWrapper header={true} sidebar={true}>
						<PrivateRouteLogin Comp={Emoji} />
					</MainWrapper>
				}
			/>

			<Route
				path='/*'
				element={
					<MainWrapper header={true} sidebar={true}>
						<PrivateRouteLogin Comp={Dashboard} />
					</MainWrapper>
				}
			/>
		</Routes>
	);
};

export default MainRoutes;
