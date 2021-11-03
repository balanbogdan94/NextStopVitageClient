import { addBrand } from '../firebase/api/brand';
import { addInStorage, deleteImage } from '../firebase/api/storage';
import { Product } from '../model/product';
import { TableProduct } from '../model/productForTable';
import { ProductForUser } from '../model/productUser';
import {
	addProductInFirebase,
	deleteProduct,
	getAllProducts,
	getProduct,
} from './../firebase/api/product';

export async function addProduct(product) {
	const imageUrls = await addInStorage(product.title, product.productImages);
	await addBrand(product.brand);
	await addProductInFirebase(product, imageUrls);
}

export async function getProducts(): Promise<TableProduct[]> {
	let products = await getAllProducts();
	let productsForTable: TableProduct[] = products.map((product) => {
		const { id, title, drop, category, brand, sizes, price, newPrice } =
			product;
		const sizesToDisplay = [...new Set(sizes)].join(', ');
		const isOnSale = !!newPrice;
		const priceToDisplay = isOnSale ? newPrice : price;
		return {
			id,
			title,
			drop,
			category,
			brand,
			sizes: sizesToDisplay,
			isOnSale,
			price: priceToDisplay,
		};
	});

	return productsForTable;
}

export async function getProductsForUser(): Promise<ProductForUser[]> {
	let _products = await getAllProducts();
	let products: ProductForUser[] = _products.map((product) => {
		const { id, title, imageURL, brand, price, newPrice } = product;
		let discount: number | undefined;
		const imageUrl = imageURL[0];
		if (newPrice) discount = ((price - newPrice) / price) * 100;

		return {
			id,
			title,
			imageUrl,
			brand,
			price,
			priceAfterReduction: newPrice,
			discount,
		};
	});

	return products;
}

export async function deleteProducts(ids: string[]): Promise<void> {
	ids.forEach(async (id) => {
		let product = await getProduct(id);
		if (product) {
			debugger;
			product.imageURL.forEach(async (image) => {
				debugger;
				await deleteImage(image);
			});
			await deleteProduct(id);
		}
	});
}
