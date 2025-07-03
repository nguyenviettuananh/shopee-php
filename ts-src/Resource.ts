export class Resource {
  protected client: any;

  useApiClient(client: any) {
    this.client = client;
  }

  protected call(method: string, action: string, options: any = {}) {
    return this.client.call(method, action, options);
  }
}
