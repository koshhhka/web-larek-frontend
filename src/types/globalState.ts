import { IBasketModel} from './basket';
import { IOrderFormModel } from './orderForm';
import { ICatalogModel } from './product';

export interface IGlobalState {
	basket: IBasketModel;
	order: IOrderFormModel;
	catalog: ICatalogModel[];
}