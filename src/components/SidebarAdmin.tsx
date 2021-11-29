import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarAdmin.scss';

const SidebarAdmin = ({ isOpen }) => {
	const getStyle = isOpen
		? 'admin-side-bar-container admin-side-bar-container--visible'
		: 'admin-side-bar-container';

	return (
		<div className={getStyle}>
			<div className='navigation-links'>
				<ul>
					<NavLink className='item' to='/admin'>
						<li>PRODUCTS</li>
					</NavLink>
					<NavLink className='item' to='/admin/home-page'>
						<li>HOME PAGE</li>
					</NavLink>
					<li>Drop</li>
					<li>Blog</li>
				</ul>
			</div>
			<button className='logOut-button'>Log Out</button>
		</div>
	);
};

export default SidebarAdmin;
