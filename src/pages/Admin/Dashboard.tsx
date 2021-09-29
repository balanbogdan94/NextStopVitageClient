import React from 'react';
import { useHistory } from 'react-router';
import { useAuthorization } from '../../context/AuthorizationContext';

const Dashboard = () => {
	const { logOut } = useAuthorization();
	const history = useHistory();
	async function signOutPressed(e) {
		e.preventDefault();
		if (logOut) {
			await logOut();
			history.push('/admin/login');
		}
	}

	return (
		<div>
			<h1>I'm the admin</h1>
			<button onClick={signOutPressed}>Sign Out from here</button>
		</div>
	);
};

export default Dashboard;
