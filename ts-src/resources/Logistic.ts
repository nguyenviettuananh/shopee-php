import { Resource } from '../Resource';
import { AxiosRequestConfig } from 'axios';

export class Logistic extends Resource {
  getShippingParameter(orderSn: string, packageNumber: string = '') {
    const options: AxiosRequestConfig = {
      params: { order_sn: orderSn, package_number: packageNumber }
    };
    return this.call('GET', 'logistics/get_shipping_parameter', options);
  }

  getTrackingNumber(orderId: string, params: Record<string, any> = {}) {
    params.order_sn = orderId;
    return this.call('GET', 'logistics/get_tracking_number', { params });
  }

  shipOrder(orderSn: string, packageNumber: string = '', pickup: any = {}, dropoff: any = {}, nonIntegrated: any = {}) {
    const data = {
      order_sn: orderSn,
      package_number: packageNumber,
      pickup,
      dropoff,
      non_integrated: nonIntegrated
    };
    return this.call('POST', 'logistics/ship_order', { data });
  }

  updateShippingOrder(orderSn: string, packageNumber: string = '', pickup: any = {}) {
    const data = { order_sn: orderSn, package_number: packageNumber, pickup };
    return this.call('POST', 'logistics/update_shipping_order', { data });
  }

  getShippingDocumentParameter(orderList: any[]) {
    const data = { order_list: orderList };
    return this.call('POST', 'logistics/get_shipping_document_parameter', { data });
  }

  createShippingDocument(orderList: any[] = []) {
    const data = { order_list: orderList };
    return this.call('POST', 'logistics/create_shipping_document', { data });
  }

  getShippingDocumentResult(orderList: any[] = []) {
    const data = { order_list: orderList };
    return this.call('POST', 'logistics/get_shipping_document_result', { data });
  }

  downloadShippingDocument(orderList: any[] = [], shippingDocumentType: string = '', savePath: string = '') {
    const options: AxiosRequestConfig = {
      data: { order_list: orderList, shipping_document_type: shippingDocumentType }
    };
    if (savePath) {
      (options as any).responseType = 'stream';
      (options as any).save_path = savePath;
    }
    return this.call('POST', 'logistics/download_shipping_document', options);
  }

  getTrackingInfo(orderSn: string, packageNumber: string = '') {
    const options: AxiosRequestConfig = {
      params: { order_sn: orderSn, package_number: packageNumber }
    };
    return this.call('GET', 'logistics/get_tracking_info', options);
  }

  getAddressList() {
    return this.call('GET', 'logistics/get_address_list');
  }

  setAddressConfig(addressTypeConfig: any = {}, showPickupAddress: boolean = true) {
    const data = { address_type_config: addressTypeConfig, show_pickup_address: showPickupAddress };
    return this.call('POST', 'logistics/set_address_config', { data });
  }

  deleteAddress(addressId: number) {
    const data = { address_id: addressId };
    return this.call('POST', 'logistics/delete_address', { data });
  }

  getChannelList() {
    return this.call('GET', 'logistics/get_channel_list');
  }

  updateChannel(logisticsChannelId: number, enabled: boolean = true, codEnabled: boolean = true) {
    const data = { logistics_channel_id: logisticsChannelId, enabled, cod_enabled: codEnabled };
    return this.call('POST', 'logistics/update_channel', { data });
  }

  batchShipOrder(orderList: any[] = [], pickup: any = {}, dropoff: any = {}, nonIntegrated: any = {}) {
    const data = { order_list: orderList, pickup, dropoff, non_integrated: nonIntegrated };
    return this.call('POST', 'logistics/batch_ship_order', { data });
  }

  getShippingDocumentDataInfo(orderSn: string, packageNumber: string = '', recipientAddressInfo: any = {}) {
    const data = { order_sn: orderSn, package_number: packageNumber, recipient_address_info: recipientAddressInfo };
    return this.call('POST', 'logistics/get_shipping_document_data_info', { data });
  }
}
