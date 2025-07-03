import { Resource } from '../Resource';

export class Merchant extends Resource {
  getMerchant() {
    return this.call('GET', 'merchant/get_merchant');
  }

  getMerchantAuthSites() {
    return this.call('GET', 'merchant/get_merchant_auth_sites');
  }

  getMerchantShopList(params: Record<string, any> = {}) {
    return this.call('GET', 'merchant/get_merchant_shop_list', { params });
  }
}
