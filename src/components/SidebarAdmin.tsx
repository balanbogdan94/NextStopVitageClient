import React from 'react';
import './SidebarAdmin.scss';

const SidebarAdmin = ({ isOpen }) => {
	const getStyle = isOpen
		? 'side-bar-container side-bar-container--visible'
		: 'side-bar-container';

	return (
		<div className={getStyle}>
			<div className="navigation-links">
				<ul>
					<li>Products</li>
					<li>Orders</li>
					<li>Drop</li>
					<li>Blog</li>
				</ul>
			</div>
			<button className="logOut-button">Log Out</button>
		</div>
	);
};

export default SidebarAdmin;
