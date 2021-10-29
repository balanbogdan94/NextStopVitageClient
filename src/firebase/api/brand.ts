import {
	getFirestore,
	collection,
	connectFirestoreEmulator,
	getDocs,
	doc,
	updateDoc,
	arrayUnion,
} from 'firebase/firestore';

import firebaseApp from '../firebase';

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8082);

export async function addBrand(brand: string): Promise<void> {
	try {
		const barndsRef = doc(db, 'brands', 'myBrands');
		await updateDoc(barndsRef, {
			allBrands: arrayUnion(brand),
		});
	} catch (error: any) {
		console.error('Error adding document: ', error);
	}
}

export async function getAllBrands(): Promise<string[]> {
	const querySnapshot = await getDocs(collection(db, 'brands'));
	let brands: string[] = [];
	querySnapshot.forEach((doc) => {
		let data = doc.data();
		brands = data.allBrands;
	});
	return brands;
}
