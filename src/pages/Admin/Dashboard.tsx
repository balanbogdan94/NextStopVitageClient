import React from 'react';
import { useAuthorization } from '../../context/AuthorizationContext';

const Dashboard = () => {
	const { logOut } = useAuthorization();
	async function signOutPressed(e) {
		e.preventDefault();
		await logOut();
	}

	return (
		<div>
			<h1>I'm the admin</h1>
			<button onClick={signOutPressed}>Sign Out from here</button>
		</div>
	);
};

export default Dashboard;
