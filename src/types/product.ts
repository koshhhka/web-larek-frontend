export interface IProduct {
	id: string;
	description: string;
	image: string;
	title: string;
	price: number;
	category: string;
	isSelected: boolean;
}

export interface ICatalogModel {
	getProductById(id: string): Promise<IProduct | null>;
	getAllProducts(): Promise<IProduct[]>;
}