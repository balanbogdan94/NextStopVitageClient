import { getAllBrands } from '../firebase/api/brand';

export async function getBrands(): Promise<string[]> {
	return await getAllBrands();
}
