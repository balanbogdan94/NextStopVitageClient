import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Navbar/Header';
import SideBar from '../components/Navbar/SideBar';
import SideMenuContext from '../SideMenuContext';
import './UserLayout.scss';

const UserLayout = ({ children }) => {
	return (
		<div className="user-layout-container">
			<SideMenuContext>
				<Header />
				<SideBar />
			</SideMenuContext>
			<div className="user-layout-container_content">{children}</div>
			<Footer />
		</div>
	);
};

export default UserLayout;
