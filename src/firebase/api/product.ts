import {
	getFirestore,
	collection,
	addDoc,
	connectFirestoreEmulator,
	getDocs,
	deleteDoc,
	doc,
	getDoc,
	query,
	where,
} from 'firebase/firestore';
import { Product } from '../../model/product';

import firebaseApp from '../firebase';

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8082);

export async function addProductInFirebase(product, imageUrls): Promise<void> {
	const { brand, category, price, sizes, title, drop, newPrice } = product;
	const sizess = sizes.map((s) => s.value);

	try {
		const docRef = await addDoc(collection(db, 'products'), {
			title,
			category,
			brand,
			sizess,
			price,
			imageUrls,
			drop,
			newPrice,
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (error: any) {
		console.error('Error adding document: ', error);
	}
}

export async function getAllProducts(
	category?: string | null,
): Promise<Product[]> {
	let querySnapshot;
	if (category) {
		const citiesRef = collection(db, 'products');
		const q = query(citiesRef, where('category', '==', category));
		querySnapshot = await getDocs(q);
	} else {
		querySnapshot = await getDocs(collection(db, 'products'));
	}
	let products: Product[] = [];
	querySnapshot.forEach((doc) => {
		const data = doc.data();
		products.push({
			id: doc.id,
			title: data.title,
			category: data.category,
			brand: data.brand,
			sizes: data.sizess,
			price: data.price,
			drop: data.drop,
			newPrice: data.newPrice,
			imageURL: data.imageUrls,
		});
	});
	return products;
}

export async function getAllSaleProducts(
	category?: string | null,
): Promise<Product[]> {
	let querySnapshot;
	const citiesRef = collection(db, 'products');
	const q = query(citiesRef, where('isOnSale', '==', true));
	querySnapshot = await getDocs(q);
	let products: Product[] = [];
	querySnapshot.forEach((doc) => {
		const data = doc.data();
		products.push({
			id: doc.id,
			title: data.title,
			category: data.category,
			brand: data.brand,
			sizes: data.sizess,
			price: data.price,
			drop: data.drop,
			newPrice: data.newPrice,
			imageURL: data.imageUrls,
		});
	});
	return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
	const docRef = await doc(db, 'products', id);
	const docSnap = await getDoc(docRef);
	const data = docSnap.data();
	if (data) {
		return {
			id,
			title: data.title,
			category: data.category,
			brand: data.brand,
			sizes: data.sizess,
			price: data.price,
			drop: data.drop,
			newPrice: data.newPrice,
			imageURL: data.imageUrls,
		};
	}
	return undefined;
}

export async function deleteProduct(id: string): Promise<void> {
	await deleteDoc(doc(db, 'products', id));
}
