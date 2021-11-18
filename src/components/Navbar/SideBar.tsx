import React, { useContext } from 'react';
import { SideMenuContext } from '../../context/SideMenuContext';
import NavigationLinks from './NavigationLinks';
import './SideBar.scss';

const SideBar = () => {
	const { isOpen, setIsOpen } = useContext(SideMenuContext);

	const getStyle = isOpen
		? 'side-bar-container side-bar-container--visible'
		: 'side-bar-container';

	const onNavigationEvent = () => {
		setIsOpen(false);
		document.body.style.overflow = 'auto';
	};

	return (
		<div className='test'>
			<div className={getStyle}>
				<div className='navigation-links'>
					<NavigationLinks onButtonPressed={onNavigationEvent} />
				</div>
			</div>
		</div>
	);
};
export default SideBar;
