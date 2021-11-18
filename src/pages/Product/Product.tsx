import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { ProductForUser } from '../../model/productUser';
import { getProductForUser } from '../../service/ProductService';

const Product = () => {
	let params = useParams();
	const [product, setProduct] = React.useState<ProductForUser>();

	React.useEffect(() => {
		if (params && params.productId) {
			getProductForUser(params.productId).then((data) => setProduct(data));
		}
	}, []);
	if (!product) return <h1>Loading...</h1>;
	return (
		<div>
			<ProductCard product={product} />
		</div>
	);
};

export default Product;
