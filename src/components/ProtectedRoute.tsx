import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthorization } from '../context/AuthorizationContext';

function ProtectedRoute({ component: Component, ...rest }) {
	const { user } = useAuthorization();
	return (
		<Route
			{...rest}
			render={(props) =>
				user ? <Component {...props} /> : <Redirect to="/admin/login" />
			}
		/>
	);
}

export default ProtectedRoute;
