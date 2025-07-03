import { Resource } from '../Resource';

export class Returns extends Resource {
  getReturnList(params: Record<string, any> = {}) {
    return this.call('GET', 'returns/get_return_list', { params });
  }

  getReturnDetail(returnSn: string) {
    return this.call('GET', 'returns/get_return_detail', { params: { return_sn: returnSn } });
  }

  confirm(returnSn: string) {
    return this.call('POST', 'returns/confirm', { data: { return_sn: returnSn } });
  }

  dispute(returnSn: string, disputeReason: string) {
    const data = { return_sn: returnSn, dispute_reason: disputeReason };
    return this.call('POST', 'returns/dispute', { data });
  }

  getEscalationList(params: Record<string, any> = {}) {
    return this.call('GET', 'returns/get_escalation_list', { params });
  }
}
