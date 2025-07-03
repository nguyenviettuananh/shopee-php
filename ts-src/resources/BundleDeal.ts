import { Resource } from '../Resource';

export class BundleDeal extends Resource {
  addBundleDeal(data: any) {
    return this.call('POST', 'bundle_deal/add_bundle_deal', { data });
  }

  updateBundleDeal(bundleDealId: number, data: any) {
    data.bundle_deal_id = bundleDealId;
    return this.call('POST', 'bundle_deal/update_bundle_deal', { data });
  }

  endBundleDeal(bundleDealId: number) {
    return this.call('POST', 'bundle_deal/end_bundle_deal', { data: { bundle_deal_id: bundleDealId } });
  }

  getBundleDealList(params: Record<string, any> = {}) {
    params = { page_no: 1, page_size: 100, promotion_status: 'all', ...params };
    return this.call('GET', 'bundle_deal/get_bundle_deal_list', { params });
  }

  getBundleDeal(bundleDealId: number) {
    return this.call('GET', 'bundle_deal/get_bundle_deal', { params: { bundle_deal_id: bundleDealId } });
  }

  getBundleDealItem(bundleDealId: number) {
    return this.call('GET', 'bundle_deal/get_bundle_deal_item', { params: { bundle_deal_id: bundleDealId } });
  }

  updateBundleDealItem(bundleDealId: number, itemList: any[]) {
    const data = { bundle_deal_id: bundleDealId, item_list: itemList };
    return this.call('POST', 'bundle_deal/update_bundle_deal_item', { data });
  }
}
