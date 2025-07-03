import { Resource } from '../Resource';

export class Discount extends Resource {
  addDiscount(data: any) {
    return this.call('POST', 'discount/add_discount', { data });
  }

  addDiscountItem(discountId: number, itemList: any[]) {
    const data = { discount_id: discountId, item_list: itemList };
    return this.call('POST', 'discount/add_discount_item', { data });
  }

  deleteDiscount(discountId: number) {
    return this.call('POST', 'discount/delete_discount', { data: { discount_id: discountId } });
  }

  deleteDiscountItem(discountId: number, itemList: any[]) {
    const data = { discount_id: discountId, item_list: itemList };
    return this.call('POST', 'discount/delete_discount_item', { data });
  }

  getDiscount(discountId: number) {
    return this.call('GET', 'discount/get_discount', { params: { discount_id: discountId } });
  }

  getDiscountList(params: Record<string, any> = {}) {
    params = { page_no: 1, page_size: 100, ...params };
    return this.call('GET', 'discount/get_discount_list', { params });
  }

  updateDiscount(discountId: number, data: any) {
    data.discount_id = discountId;
    return this.call('POST', 'discount/update_discount', { data });
  }

  updateDiscountItem(discountId: number, itemList: any[]) {
    const data = { discount_id: discountId, item_list: itemList };
    return this.call('POST', 'discount/update_discount_item', { data });
  }
}
