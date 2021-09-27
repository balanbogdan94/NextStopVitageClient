import React, { useEffect } from 'react';
import { useState } from 'react';
import './Home.scss';
import background from '../../assets/home-background.svg';
import { BiPackage } from 'react-icons/bi';
import { BiCar } from 'react-icons/bi';

const Home = () => {
	let [listOfImages, setListOfImages] = useState<any>([]);

	const importAll = (r) => {
		return r.keys().map(r);
	};

	useEffect(() => {
		//setListOfImages(importAll(require.context('./../../assets/brands', false, /\.(png)$/)));
	}, []);

	const getAllPics = () => {
		let images = listOfImages.map((image, index) => (
			<img
				className="no-background"
				key={index}
				src={image.default}
				alt="info"
			/>
		));
		return images;
	};

	return (
		<div className="home-container">
			<div className="image-container">
				<img
					alt="logoImg"
					srcSet=" images/Home/home-extra-large.webp 4025w, 
                                images/Home/home-large.webp 3019w, 
                                images/Home/home-medium.webp 2013w,
                                images/Home/home-small.webp 1006w "
					src="images/Home/home-small.webp"
				/>
			</div>
			<div className="image-container">
				<img alt="sale" src="images/Home/home-sale.webp" />
			</div>
			<div className="brand-container">
				<img
					className="background-image"
					alt="background effect"
					src={background}
				/>
				<div className="dashboard">{getAllPics()}</div>
			</div>
			<div className="benefits-container">
				<div className="benefit-container">
					<span className="dot">
						<BiCar fontSize={24} />
					</span>
					<h5>Livrare gratuita la comenzi care depasesc 300 RON</h5>
				</div>
				<div className="benefit-container">
					<span className="dot">
						<BiPackage fontSize={24} />
					</span>
					<h5>30 de zile retur gratuit</h5>
				</div>
			</div>
		</div>
	);
};

export default Home;
