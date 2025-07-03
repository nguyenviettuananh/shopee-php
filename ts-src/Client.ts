import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Client {
  private partnerId: number;
  private partnerKey: string;
  private accessToken: string = '';
  private shopId: number | null = null;
  private debugMode = false;
  private chinaRegion = false;
  private brazilRegion = false;
  private customHostname: string | null = null;

  constructor(partnerId: number, partnerKey: string) {
    this.partnerId = partnerId;
    this.partnerKey = partnerKey;
  }

  setCustomHostname(hostname: string) {
    this.customHostname = hostname;
  }

  useDebugMode() {
    this.debugMode = true;
  }

  useChinaRegion() {
    this.chinaRegion = true;
    this.brazilRegion = false;
  }

  useBrazilRegion() {
    this.brazilRegion = true;
    this.chinaRegion = false;
  }

  setAccessToken(shopId: number, accessToken: string) {
    this.shopId = shopId;
    this.accessToken = accessToken;
  }

  auth() {
    const { Auth } = require('./Auth');
    return new Auth(this);
  }

  private httpClient(): AxiosInstance {
    const client = axios.create({ baseURL: this.baseUrl() });
    client.interceptors.request.use((config) => {
      config.params = config.params || {};
      config.params.partner_id = this.partnerId;
      if (this.accessToken) {
        config.params.access_token = this.accessToken;
      }
      if (this.shopId) {
        config.params.shop_id = this.shopId;
      }
      this.prepareSignature(config.url || '', config.params);
      return config;
    });
    return client;
  }

  call(method: string, api: string, options: AxiosRequestConfig = {}) {
    api = api.replace(/^\/api\/v2\//, '');
    const client = this.httpClient();
    return client.request({ ...options, method, url: api }).then(r => r.data);
  }

  prepareSignature(path: string, query: any) {
    if (/^\/api\/v2\/auth\/(access_)?token\/get$/.test(path)) {
      delete query.access_token;
      delete query.shop_id;
    }
    query.timestamp = Math.floor(Date.now() / 1000);
    query.access_token = query.access_token || '';
    query.shop_id = query.shop_id || '';
    const stringToSign = `${this.partnerId}${path}${query.timestamp}${query.access_token}${query.shop_id}`;
    const crypto = require('crypto');
    query.sign = crypto.createHmac('sha256', this.partnerKey).update(stringToSign).digest('hex');
  }

  baseUrl() {
    if (this.customHostname) {
      return `https://${this.customHostname}/api/v2/`;
    }
    const key = (Number(this.brazilRegion) << 2) + (Number(this.chinaRegion) << 1) + Number(this.debugMode);
    switch (key) {
      case 1:
        return 'https://partner.test-stable.shopeemobile.com/api/v2/';
      case 2:
        return 'https://openplatform.shopee.cn/api/v2/';
      case 3:
        return 'https://openplatform.test-stable.shopee.cn/api/v2/';
      case 4:
        return 'https://openplatform.shopee.com.br/api/v2/';
      case 5:
        return 'https://openplatform.test-stable.shopee.com.br/api/v2/';
      default:
        return 'https://partner.shopeemobile.com/api/v2/';
    }
  }
}
