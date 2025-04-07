export interface IOrderForm {
	payment: string;
	email: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
}

export interface IOrderFormModel {
	updateField(name: string, value: any): void;
	clearField(name: string): void;
	clearAll(): void;
}