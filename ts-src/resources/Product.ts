import { Resource } from '../Resource';
import { AxiosRequestConfig } from 'axios';

export class Product extends Resource {
  getItemList(params: Record<string, any> = {}): Promise<any> {
    params = { offset: 0, page_size: 20, item_status: 'NORMAL', ...params };
    const options: AxiosRequestConfig = { params };
    return this.call('GET', 'product/get_item_list', options);
  }
}
