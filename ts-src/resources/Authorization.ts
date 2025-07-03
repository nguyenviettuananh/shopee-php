import { Resource } from '../Resource';

export class Authorization extends Resource {
  getShopsByPartner(params: Record<string, any> = {}) {
    params = { page_no: 1, page_size: 100, ...params };
    return this.call('GET', 'public/get_shops_by_partner', { params });
  }

  getMerchantsByPartner(params: Record<string, any> = {}) {
    params = { page_no: 1, page_size: 100, ...params };
    return this.call('GET', 'public/get_merchants_by_partner', { params });
  }

  getToken(code: string, shopId: number, partnerId: number) {
    const data = { code, shop_id: shopId, partner_id: partnerId };
    return this.call('POST', 'auth/token/get', { data });
  }

  refreshNewToken(refreshToken: string, shopId: number, partnerId: number) {
    const data = { refresh_token: refreshToken, shop_id: shopId, partner_id: partnerId };
    return this.call('POST', 'auth/access_token/get', { data });
  }

  getTokenByResendCode(resendCode: string) {
    return this.call('POST', 'public/get_token_by_resend_code', { data: { resend_code: resendCode } });
  }

  getRefreshTokenByUpgradeCode(upgradeCode: string, shopIdList: any[]) {
    return this.call('POST', 'public/get_refresh_token_by_upgrade_code', { data: { upgrade_code: upgradeCode, shop_id_list: shopIdList } });
  }

  getShopeeIpRanges() {
    return this.call('GET', 'public/get_shopee_ip_ranges');
  }
}
