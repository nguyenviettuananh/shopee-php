import { Resource } from '../Resource';

export class Shop extends Resource {
  getShopInfo() {
    return this.call('GET', 'shop/get_shop_info');
  }

  performance() {
    return this.call('GET', 'shop/performance');
  }

  getProfile() {
    return this.call('GET', 'shop/get_profile');
  }

  updateProfile(data: any) {
    return this.call('POST', 'shop/update_profile', { data });
  }
}
