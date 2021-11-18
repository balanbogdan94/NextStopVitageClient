import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationLinksProps {
	onButtonPressed?: CallableFunction;
}

const NavigationLinks: FC<NavigationLinksProps> = ({ onButtonPressed }) => {
	const onClickEvent = () => {
		if (onButtonPressed) {
			onButtonPressed();
		}
	};

	return (
		<nav>
			<ul>
				<NavLink
					className='item'
					to='/products?category=Tops'
					onClick={onClickEvent}>
					<li>TOPS</li>
				</NavLink>

				<NavLink
					className='item'
					to='/products?category=Pants'
					onClick={onClickEvent}>
					<li>PANTS</li>
				</NavLink>

				<NavLink
					className='item'
					to='/products?category=Shoes'
					onClick={onClickEvent}>
					<li>SHOES</li>
				</NavLink>

				<NavLink
					className='item'
					to='/products?category=Accesories'
					onClick={onClickEvent}>
					<li>ACCESORIES</li>
				</NavLink>

				<NavLink
					className='item item--sale'
					to='/products/sale'
					onClick={onClickEvent}>
					<li>SALE</li>
				</NavLink>
			</ul>
		</nav>
	);
};

export default NavigationLinks;
