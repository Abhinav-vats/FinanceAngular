//import { OrderDetail } from './OrderDetail';
import {OrderDetailDto} from './OrderDetailDto';
export class OrderDetailStatus{

    status: number;
    message: string;
    orderList: Array<OrderDetailDto> =  new Array();

}