import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
	return (
		<div className='product-container'>
			<img src={product.imageUrl} alt='product' />
			<span className='product-container__brand'>{product.brand}</span>
			<span className='product-container__title'>{product.title}</span>
			<span
				className='product-container__price'
				style={{
					textDecoration: product.priceAfterReduction && 'line-through',
				}}>
				{`${product.price} RON`}
			</span>
			{product.priceAfterReduction && (
				<div className='product-container__discount'>
					<span className='product-container__discount__new-price'>{`${product.priceAfterReduction} RON`}</span>
					<span className='product-container__discount__discount'>{`( -${product.discount.toFixed(
						1,
					)}% )`}</span>
				</div>
			)}
		</div>
	);
};

export default ProductCard;
