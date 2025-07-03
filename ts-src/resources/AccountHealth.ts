import { Resource } from '../Resource';
import { AxiosRequestConfig } from 'axios';

export class AccountHealth extends Resource {
  getShopPerformance() {
    return this.call('GET', 'account_health/get_shop_performance');
  }

  shopPenalty() {
    return this.call('GET', 'account_health/shop_penalty');
  }

  getMetricSourceDetail(metricId: number, pageNo: number = 1, pageSize: number = 100) {
    const options: AxiosRequestConfig = { params: { metric_id: metricId, page_no: pageNo, page_size: pageSize } };
    return this.call('GET', 'account_health/get_metric_source_detail', options);
  }

  getPenaltyPointHistory(violationType: string | null = null, pageNo: number = 1, pageSize: number = 100) {
    const params: Record<string, any> = { page_no: pageNo, page_size: pageSize };
    if (violationType) params.violation_type = violationType;
    return this.call('GET', 'account_health/get_penalty_point_history', { params });
  }

  getPunishmentHistory(punishmentStatus: string, pageNo: number = 1, pageSize: number = 100) {
    const params = { page_no: pageNo, page_size: pageSize, punishment_status: punishmentStatus };
    return this.call('GET', 'account_health/get_punishment_history', { params });
  }

  getListingsWithIssues(pageNo: number = 1, pageSize: number = 100) {
    const params = { page_no: pageNo, page_size: pageSize };
    return this.call('GET', 'account_health/get_listings_with_issues', { params });
  }

  getLateOrders(pageNo: number = 1, pageSize: number = 100) {
    const params = { page_no: pageNo, page_size: pageSize };
    return this.call('GET', 'account_health/get_late_orders', { params });
  }
}
