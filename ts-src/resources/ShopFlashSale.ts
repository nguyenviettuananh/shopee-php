import { Resource } from '../Resource';

export class ShopFlashSale extends Resource {
  addShopFlashSale(data: any) {
    return this.call('POST', 'shop_flash_sale/add_shop_flash_sale', { data });
  }

  deleteShopFlashSale(flashSaleId: number) {
    return this.call('POST', 'shop_flash_sale/delete_shop_flash_sale', { data: { flash_sale_id: flashSaleId } });
  }

  getShopFlashSale(flashSaleId: number) {
    return this.call('GET', 'shop_flash_sale/get_shop_flash_sale', { params: { flash_sale_id: flashSaleId } });
  }

  getShopFlashSaleList(params: Record<string, any> = {}) {
    return this.call('GET', 'shop_flash_sale/get_shop_flash_sale_list', { params });
  }

  updateShopFlashSale(flashSaleId: number, data: any) {
    data.flash_sale_id = flashSaleId;
    return this.call('POST', 'shop_flash_sale/update_shop_flash_sale', { data });
  }

  addItem(flashSaleId: number, itemList: any[]) {
    const data = { flash_sale_id: flashSaleId, item_list: itemList };
    return this.call('POST', 'shop_flash_sale/add_item', { data });
  }

  deleteItem(flashSaleId: number, itemList: any[]) {
    const data = { flash_sale_id: flashSaleId, item_list: itemList };
    return this.call('POST', 'shop_flash_sale/delete_item', { data });
  }
}
