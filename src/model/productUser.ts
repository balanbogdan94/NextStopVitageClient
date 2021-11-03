export interface ProductForUser {
	id: string;
	title: string;
	brand: string;
	imageUrl: string;
	price: number;
	priceAfterReduction?: number;
	discount?: number;
}
