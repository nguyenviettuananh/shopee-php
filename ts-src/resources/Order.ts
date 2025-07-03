import { Resource } from '../Resource';
import { AxiosRequestConfig } from 'axios';

export class Order extends Resource {
  getOrderList(params: Record<string, any> = {}) {
    return this.call('GET', 'order/get_order_list', { params });
  }

  getOrderDetail(orderSnList: string[], responseOptionalFields: string[] = []) {
    const params = { order_sn_list: orderSnList.join(','), response_optional_fields: responseOptionalFields.join(',') };
    return this.call('GET', 'order/get_order_detail', { params });
  }

  setNote(orderSn: string, note: string) {
    const data = { order_sn: orderSn, note };
    return this.call('POST', 'order/set_note', { data });
  }

  cancelOrder(orderSn: string, cancelReason: string) {
    const data = { order_sn: orderSn, cancel_reason: cancelReason };
    return this.call('POST', 'order/cancel_order', { data });
  }

  handleBuyerCancellation(orderSn: string, operation: string) {
    const data = { order_sn: orderSn, operation };
    return this.call('POST', 'order/handle_buyer_cancellation', { data });
  }

  splitOrder(orderSn: string, itemList: any[]) {
    const data = { order_sn: orderSn, item_list: itemList };
    return this.call('POST', 'order/split_order', { data });
  }

  unsplitOrder(orderSn: string) {
    return this.call('POST', 'order/un_split_order', { data: { order_sn: orderSn } });
  }

  getEscrowList(orderSnList: string[]) {
    const params = { order_sn_list: orderSnList.join(',') };
    return this.call('GET', 'order/get_escrow_list', { params });
  }

  massGetEscrowDetails(orderSnList: string[]) {
    const data = { order_sn_list: orderSnList };
    return this.call('POST', 'order/mass_get_escrow_details', { data });
  }

  setInvoiceData(orderSn: string, data: any) {
    data.order_sn = orderSn;
    return this.call('POST', 'order/set_invoice_data', { data });
  }
}
