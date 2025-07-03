import { Resource } from '../Resource';

export class ShopCategory extends Resource {
  addShopCategory(name: string, sortWeight: number = 0) {
    return this.call('POST', 'shop_category/add_shop_category', { data: { shop_category_name: name, sort_weight: sortWeight } });
  }

  deleteShopCategory(shopCategoryId: number) {
    return this.call('POST', 'shop_category/delete_shop_category', { data: { shop_category_id: shopCategoryId } });
  }

  getShopCategoryList() {
    return this.call('GET', 'shop_category/get_shop_category_list');
  }

  updateShopCategory(shopCategoryId: number, name: string, sortWeight: number = 0) {
    const data = { shop_category_id: shopCategoryId, shop_category_name: name, sort_weight: sortWeight };
    return this.call('POST', 'shop_category/update_shop_category', { data });
  }

  addItemList(shopCategoryId: number, itemList: number[]) {
    const data = { shop_category_id: shopCategoryId, item_id_list: itemList };
    return this.call('POST', 'shop_category/add_item_list', { data });
  }

  deleteItemList(shopCategoryId: number, itemList: number[]) {
    const data = { shop_category_id: shopCategoryId, item_id_list: itemList };
    return this.call('POST', 'shop_category/delete_item_list', { data });
  }
}
