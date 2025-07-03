import { Client } from './Client';

export class Auth {
  constructor(private client: Client) {}

  createAuthRequest(redirectUri: string, ret: boolean = false): string | void {
    const url = `${this.client.baseUrl()}auth/authorize?partner_id=${this.client['partnerId']}&redirect=${encodeURIComponent(redirectUri)}`;
    if (ret) {
      return url;
    }
    // In browser environment you would redirect
    return url;
  }

  getToken(code: string, shopId: number) {
    return this.client.call('POST', 'auth/token/get', {
      data: { code, shop_id: shopId },
    });
  }
}
