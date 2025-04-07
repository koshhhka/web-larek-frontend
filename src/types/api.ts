import {IOrderForm} from './orderForm';
import {IProduct} from './product';

export interface IApi {
	getProducts(): Promise<IProduct[]>;
	getProductById(id: string): Promise<IProduct>;
	postOrder(order: IOrderForm): Promise<IOrderForm>;
}