import { Resource } from '../Resource';

export class Ads extends Resource {
  getTotalBalance() {
    return this.call('GET', 'ads/get_total_balance');
  }

  getShopToggleInfo() {
    return this.call('GET', 'ads/get_shop_toggle_info');
  }

  getRecommendedKeywordList(itemId: number, inputKeyword: string | null = null) {
    const params: Record<string, any> = { item_id: itemId, input_keyword: inputKeyword };
    return this.call('GET', 'ads/get_recommended_keyword_list', { params });
  }

  getRecommendedItemList() {
    return this.call('GET', 'ads/get_recommended_item_list');
  }

  getAllCpcAdsHourlyPerformance(performanceDate: string) {
    return this.call('GET', 'ads/get_all_cpc_ads_hourly_performance', { params: { performance_date: performanceDate } });
  }

  getAllCpcAdsDailyPerformance(startDate: string, endDate: string) {
    return this.call('GET', 'ads/get_all_cpc_ads_daily_performance', { params: { start_date: startDate, end_date: endDate } });
  }
}
