import { addBrand } from '../firebase/api/brand';
import { addInStorage, deleteImage } from '../firebase/api/storage';
import { TableProduct } from '../model/productForTable';
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
