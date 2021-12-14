import {PaymentScheduleDto} from './PaymentScheduleDto';
export class PaymentScheduleStatus{

    status: number;
    message: string;
    paymentScheduleList: Array<PaymentScheduleDto> =  new Array();

}