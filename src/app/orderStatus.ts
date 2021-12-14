import {OrderDto} from './OrderDto';
export class OrderStatus{

    status: number;
    message: string;
    orderList: Array<OrderDto> =  new Array();

}