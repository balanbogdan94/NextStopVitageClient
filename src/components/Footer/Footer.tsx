import React from 'react';
import './Footer.scss';
import { TiSocialFacebookCircular, TiSocialInstagram } from 'react-icons/ti';

const Footer = () => {
	return (
		<div className="container">
			<ul className="social-link">
				<li>
					<a href="https://www.facebook.com/NextStopVintageShop/">
						<TiSocialFacebookCircular size={50} />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/next_stop_vintage_shop/">
						<TiSocialInstagram size={50} />
					</a>
				</li>
			</ul>
			<ul className="info-link">
				<a href="#">
					<li>Livrare si retur</li>
				</a>
				<a href="#">
					<li>Termeni si conditii </li>
				</a>
				<a href="https://anpc.ro/">
					<li>A.N.P.C.</li>
				</a>
			</ul>
			<ul className="contact-info">
				<li>
					<b>Next Stop Vintage SRL</b>
				</li>
				<li>J26/714/2016 / RO36074262</li>
				<br />
				<li>
					<b>Adresa:</b> Str. Zizin nr.7
				</li>
				<li>
					<b>Telefon:</b> +40751943516
				</li>
				<li>
					<b>Email:</b> vlad500cent@yahoo.com
				</li>
			</ul>
			© 2021 Next Stop Vintage
		</div>
	);
};

export default Footer;
