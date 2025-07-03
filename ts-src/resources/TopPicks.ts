import { Resource } from '../Resource';

export class TopPicks extends Resource {
  addTopPicks(data: any) {
    return this.call('POST', 'top_picks/add_top_picks', { data });
  }

  deleteTopPicks(topPicksId: number) {
    return this.call('POST', 'top_picks/delete_top_picks', { data: { top_picks_id: topPicksId } });
  }

  updateTopPicks(topPicksId: number, data: any) {
    data.top_picks_id = topPicksId;
    return this.call('POST', 'top_picks/update_top_picks', { data });
  }

  getTopPicksList(params: Record<string, any> = {}) {
    return this.call('GET', 'top_picks/get_top_picks_list', { params });
  }

  endTopPicks(topPicksId: number) {
    return this.call('POST', 'top_picks/end_top_picks', { data: { top_picks_id: topPicksId } });
  }
}
