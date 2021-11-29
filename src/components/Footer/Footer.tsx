import React from 'react';
import './Footer.scss';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='social-links'>
				<hr />
				<ul>
					<li>
						<a href='https://www.facebook.com/NextStopVintageShop/'>
							<AiFillFacebook size={20} />
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/next_stop_vintage_shop/'>
							<AiFillInstagram size={20} />
						</a>
					</li>
				</ul>
				<hr />
			</div>
			<div className='info-link'>
				<ul>
					<a href='#'>
						<li>Contact</li>
					</a>
					<a href='#'>
						<li>Livrare si retur</li>
					</a>
					<a href='#'>
						<li>Termeni si conditii </li>
					</a>
					<a href='#'>
						<li>Politica de confidentialitate </li>
					</a>
					<a href='https://anpc.ro/'>
						<li>A.N.P.C.</li>
					</a>
				</ul>
			</div>
			<div className='copyright'>© 2021 Next Stop Vintage</div>
		</div>
	);
};

export default Footer;
