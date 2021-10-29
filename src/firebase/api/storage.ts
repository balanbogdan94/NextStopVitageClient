import {
	getStorage,
	ref,
	connectStorageEmulator,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage';

import firebaseApp from '../firebase';

const storage = getStorage();
connectStorageEmulator(storage, 'localhost', 9199);

export async function addInStorage(
	productName: string,
	imageFiles: File[],
): Promise<string[]> {
	debugger;
	const imageFolderName = `${productName}-${new Date().toISOString()}`;
	const files = Array.from(imageFiles);
	const urls: Promise<string>[] = files.map(async (file, index) => {
		const storageRef = ref(storage, `${imageFolderName}/${index}`);
		const snapshot = await uploadBytes(storageRef, file);
		const url = await getDownloadURL(snapshot.ref);
		return url;
	});
	const urls2 = await Promise.all(urls);
	return urls2;
}

export async function deleteImage(imagePath: string): Promise<void> {
	const desertRef = ref(storage, imagePath);
	await deleteObject(desertRef);
}
