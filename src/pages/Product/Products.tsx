import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { ProductForUser } from '../../model/productUser';
import { getProductsForUser } from '../../service/ProductService';
import './Products.scss';
import { useSearchParams } from 'react-router-dom';

interface ProductsProps {
	onlyOnSale?: boolean;
}

const Products = (props: ProductsProps) => {
	const [products, setProducts] = React.useState<ProductForUser[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const category = searchParams.get('category');

	React.useEffect(() => {
		if (props.onlyOnSale) {
			getProductsForUser(category, true).then((data) => setProducts(data));
			return;
		}
		getProductsForUser(category).then((data) => setProducts(data));
	}, [searchParams]);

	return (
		<div className='products-overview'>
			{products.map((p: ProductForUser) => {
				return (
					<Link
						to={`/products/${p.id}`}
						key={p.id}
						style={{ color: 'inherit', textDecoration: 'inherit' }}>
						<ProductCard product={p} />
					</Link>
				);
			})}
		</div>
	);
};

export default Products;
