import React from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import SidebarAdmin from '../components/SidebarAdmin';
import './AdminLayout.scss';

const AdminLayout = ({ children }) => {
	const [isOpenSideBar, setIsOpenSideBar] = React.useState(false);

	function onHamburgerButtonPressed(e) {
		e.preventDefault();
		setIsOpenSideBar((prevState) => !prevState);
	}
	return (
		<div className="admin-layout-container">
			<div className="hamburger-container">
				{isOpenSideBar ? (
					<BiX
						onClick={onHamburgerButtonPressed}
						className="hamburger-container__button"
						fontSize={24}
					/>
				) : (
					<BiMenu
						onClick={onHamburgerButtonPressed}
						className="hamburger-container__button"
						fontSize={24}
					/>
				)}
			</div>
			<div className="sidebar">
				<SidebarAdmin isOpen={isOpenSideBar} />
			</div>
			<div className="content">{children}</div>
		</div>
	);
};

export default AdminLayout;
