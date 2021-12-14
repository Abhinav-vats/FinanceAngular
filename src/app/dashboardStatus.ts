import { CardDashboardDetail } from "./cardDashboardDetail";
import { ProductDashboard } from "./productDashboard";
import { TransactionDashboard } from "./transactionDashboard";
import { OrderDashboard } from './orderDashboard';

export class DashboardStatus{
    status: number;
    message: string;
    cardDashboardDetail: CardDashboardDetail;
    productList: Array<ProductDashboard> =  new Array();
    transactionList: Array<TransactionDashboard> =  new Array();
    orderList: Array<OrderDashboard> =  new Array();
}