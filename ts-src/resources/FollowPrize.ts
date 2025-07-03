import { Resource } from '../Resource';

export class FollowPrize extends Resource {
  getPrizeList(params: Record<string, any> = {}) {
    params = { page_no: 1, page_size: 100, ...params };
    return this.call('GET', 'follow_prize/get_prize_list', { params });
  }

  getPrizeItem(prizeId: number) {
    return this.call('GET', 'follow_prize/get_prize_item', { params: { prize_id: prizeId } });
  }

  createPrize(data: any) {
    return this.call('POST', 'follow_prize/create_prize', { data });
  }

  updatePrize(prizeId: number, data: any) {
    data.prize_id = prizeId;
    return this.call('POST', 'follow_prize/update_prize', { data });
  }

  deletePrize(prizeId: number) {
    return this.call('POST', 'follow_prize/delete_prize', { data: { prize_id: prizeId } });
  }
}
