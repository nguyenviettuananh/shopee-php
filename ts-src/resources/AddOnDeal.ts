import { Resource } from '../Resource';
import { AxiosRequestConfig } from 'axios';

export class AddOnDeal extends Resource {
  addAddOnDeal(data: any) {
    return this.call('POST', 'add_on_deal/add_add_on_deal', { data });
  }

  addAddOnDealMainItem(addOnDealId: number, mainItemList: any[]) {
    const data = { add_on_deal_id: addOnDealId, main_item_list: mainItemList };
    return this.call('POST', 'add_on_deal/add_add_on_deal_main_item', { data });
  }

  addAddOnDealSubItem(addOnDealId: number, subItemList: any[]) {
    const data = { add_on_deal_id: addOnDealId, sub_item_list: subItemList };
    return this.call('POST', 'add_on_deal/add_add_on_deal_sub_item', { data });
  }

  deleteAddOnDeal(addOnDealId: number) {
    const data = { add_on_deal_id: addOnDealId };
    return this.call('POST', 'add_on_deal/delete_add_on_deal', { data });
  }

  deleteAddOnDealMainItem(addOnDealId: number, mainItemList: any[]) {
    const data = { add_on_deal_id: addOnDealId, main_item_list: mainItemList };
    return this.call('POST', 'add_on_deal/delete_add_on_deal_main_item', { data });
  }

  deleteAddOnDealSubItem(addOnDealId: number, subItemList: any[]) {
    const data = { add_on_deal_id: addOnDealId, sub_item_list: subItemList };
    return this.call('POST', 'add_on_deal/delete_add_on_deal_sub_item', { data });
  }

  getAddOnDealList(params: Record<string, any> = {}) {
    params = { page_no: 1, page_size: 100, promotion_status: 'all', ...params };
    return this.call('GET', 'add_on_deal/get_add_on_deal_list', { params });
  }

  getAddOnDeal(addOnDealId: number) {
    return this.call('GET', 'add_on_deal/get_add_on_deal', { params: { add_on_deal_id: addOnDealId } });
  }

  getAddOnDealMainItem(addOnDealId: number) {
    return this.call('GET', 'add_on_deal/get_add_on_deal_main_item', { params: { add_on_deal_id: addOnDealId } });
  }

  getAddOnDealSubItem(addOnDealId: number) {
    return this.call('GET', 'add_on_deal/get_add_on_deal_sub_item', { params: { add_on_deal_id: addOnDealId } });
  }

  updateAddOnDeal(addOnDealId: number, data: any) {
    data.add_on_deal_id = addOnDealId;
    return this.call('POST', 'add_on_deal/update_add_on_deal', { data });
  }

  updateAddOnDealMainItem(addOnDealId: number, mainItemList: any[]) {
    const data = { add_on_deal_id: addOnDealId, main_item_list: mainItemList };
    return this.call('POST', 'add_on_deal/update_add_on_deal_main_item', { data });
  }

  updateAddOnDealSubItem(addOnDealId: number, subItemList: any[]) {
    const data = { add_on_deal_id: addOnDealId, sub_item_list: subItemList };
    return this.call('POST', 'add_on_deal/update_add_on_deal_sub_item', { data });
  }

  endAddOnDeal(addOnDealId: number) {
    const data = { add_on_deal_id: addOnDealId };
    return this.call('POST', 'add_on_deal/end_add_on_deal', { data });
  }
}
