import React from 'react';
import ProductCard from '../../components/ProductCard';
import { ProductForUser } from '../../model/productUser';
import { getProductsForUser } from '../../service/ProductService';
import './Product.scss';

const Products = () => {
	const [products, setProducts] = React.useState<ProductForUser[]>([]);

	React.useEffect(() => {
		getProductsForUser().then((data) => setProducts(data));
	}, []);

	return (
		<div className="products-overview">
			{products.map((p: ProductForUser) => (
				<ProductCard product={p} />
			))}
		</div>
	);
};

export default Products;
