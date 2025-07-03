import { Resource } from '../Resource';

export class Push extends Resource {
  publicKey() {
    return this.call('GET', 'push/public_key/get');
  }

  getWebhookInfo() {
    return this.call('GET', 'push/get_webhook_info');
  }

  setWebhookInfo(callbackUrl: string) {
    return this.call('POST', 'push/set_webhook_info', { data: { callback_url: callbackUrl } });
  }
}
