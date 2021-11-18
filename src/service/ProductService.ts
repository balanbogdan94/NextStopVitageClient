import { addBrand } from '../firebase/api/brand';
import { addInStorage, deleteImage } from '../firebase/api/storage';
import { Product } from '../model/product';
import { TableProduct } from '../model/productForTable';
import { ProductForUser } from '../model/productUser';
import {
	addProductInFirebase,
	deleteProduct,
	getAllProducts,
	getAllSaleProducts,
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

export async function getProductsForUser(
	category: string | null,
	onSale = false,
): Promise<ProductForUser[]> {
	let _products = onSale
		? await getAllSaleProducts(category)
		: await getAllProducts(category);
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

export async function getProductForUser(
	productId: string,
): Promise<ProductForUser> {
	let product = await getProduct(productId);
	if (product) {
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
	}

	throw Error('Id not exists');
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
