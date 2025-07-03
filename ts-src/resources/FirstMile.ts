import { Resource } from '../Resource';

export class FirstMile extends Resource {
  getShippingDocumentInfo(orderSn: string) {
    return this.call('GET', 'first_mile/get_shipping_document_info', { params: { order_sn: orderSn } });
  }

  downloadShippingDocument(orderSn: string, type: string, savePath: string = '') {
    const options: any = { params: { order_sn: orderSn, document_type: type } };
    if (savePath) {
      options.responseType = 'stream';
      options.save_path = savePath;
    }
    return this.call('GET', 'first_mile/download_shipping_document', options);
  }
}
