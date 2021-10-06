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
				<svg
					className="hamburger-container__wave"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 390 36"
					preserveAspectRatio="none"
					shape-rendering="auto"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M-32 13.3349L-8.43833 11.8532C14.7717 10.3716 61.895 7.40828 108.667 12.5941C155.438 17.7799 202.562 31.1148 249.333 34.8189C296.105 38.5231 343.228 32.5964 366.438 29.6331L390 26.6698V0H366.438C343.228 0 296.105 0 249.333 0C202.562 0 155.438 0 108.667 0C61.895 0 14.7717 0 -8.43833 0H-32V13.3349Z"
						fill="black"
					/>
				</svg>
			</div>
			<div className="sidebar">
				<SidebarAdmin isOpen={isOpenSideBar} />
			</div>
			<div className="content">{children}</div>
			<svg
				className="background-bottom"
				viewBox="0 0 390 91"
				fill="none"
				preserveAspectRatio="none"
				shape-rendering="auto"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 56.875L13 42.6563C26 28.4375 52 0 78 0C104 0 130 28.4375 156 42.6563C182 56.875 208 56.875 234 48.3438C260 39.8125 286 22.75 312 25.5938C338 28.4375 364 51.1875 377 62.5625L390 73.9375V91H377C364 91 338 91 312 91C286 91 260 91 234 91C208 91 182 91 156 91C130 91 104 91 78 91C52 91 26 91 13 91H0V56.875Z"
					fill="#DEDBE5"
				/>
			</svg>
		</div>
	);
};

export default AdminLayout;
