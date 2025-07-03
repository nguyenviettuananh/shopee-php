import { Resource } from '../Resource';

export class Payment extends Resource {
  getEscrowDetail(orderSn: string) {
    return this.call('GET', 'payment/get_escrow_detail', { params: { order_sn: orderSn } });
  }

  setShopInstallmentStatus(installmentStatus: number) {
    return this.call('POST', 'payment/set_shop_installment_status', { data: { installment_status: installmentStatus } });
  }

  getShopInstallmentStatus() {
    return this.call('GET', 'payment/get_shop_installment_status');
  }

  getPayoutDetail(pageSize: number, pageNo: number, timeFrom: number, timeTo: number) {
    const params = { page_size: pageSize, page_no: pageNo, payout_time_from: timeFrom, payout_time_to: timeTo };
    return this.call('GET', 'payment/get_payout_detail', { params });
  }

  setItemInstallmentStatus(itemIdList: number[], tenureList: number[], participatePlanAhora = false) {
    const data = { item_id_list: itemIdList, tenure_list: tenureList, participate_plan_ahora: participatePlanAhora };
    return this.call('POST', 'payment/set_item_installment_status', { data });
  }

  getItemInstallmentStatus(itemIdList: number[]) {
    return this.call('POST', 'payment/get_item_installment_status', { data: { item_id_list: itemIdList } });
  }

  getPaymentMethodList() {
    return this.call('GET', 'payment/get_payment_method_list');
  }

  getWalletTransactionList(pageSize: number, pageNo: number, createTimeFrom: number, createTimeTo: number, walletType: string | null = null, transactionType: string | null = null, moneyFlow: string | null = null, transactionTabType: string | null = null) {
    const params: Record<string, any> = { page_size: pageSize, page_no: pageNo, create_time_from: createTimeFrom, create_time_to: createTimeTo };
    if (walletType) params.wallet_type = walletType;
    if (transactionType) params.transaction_type = transactionType;
    if (moneyFlow) params.money_flow = moneyFlow;
    if (transactionTabType) params.transaction_tab_type = transactionTabType;
    return this.call('GET', 'payment/get_wallet_transaction_list', { params });
  }

  getEscrowList(releaseTimeFrom: number, releaseTimeTo: number, pageSize: number | null = null, pageNo: number | null = null) {
    const params: Record<string, any> = { release_time_from: releaseTimeFrom, release_time_to: releaseTimeTo };
    if (pageSize) params.page_size = pageSize;
    if (pageNo) params.page_no = pageNo;
    return this.call('GET', 'payment/get_escrow_list', { params });
  }

  getPayoutInfo(params: Record<string, any> = {}) {
    return this.call('GET', 'payment/get_payout_info', { params });
  }

  getBillingTransactionInfo(params: Record<string, any> = {}) {
    return this.call('POST', 'payment/get_billing_transaction_info', { data: params });
  }
}
