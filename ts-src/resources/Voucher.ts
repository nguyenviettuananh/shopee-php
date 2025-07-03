import { Resource } from '../Resource';

export class Voucher extends Resource {
  addVoucher(data: any) {
    return this.call('POST', 'voucher/add_voucher', { data });
  }

  deleteVoucher(voucherId: number) {
    return this.call('POST', 'voucher/delete_voucher', { data: { voucher_id: voucherId } });
  }

  updateVoucher(voucherId: number, data: any) {
    data.voucher_id = voucherId;
    return this.call('POST', 'voucher/update_voucher', { data });
  }

  getVoucher(voucherId: number) {
    return this.call('GET', 'voucher/get_voucher', { params: { voucher_id: voucherId } });
  }

  getVoucherList(params: Record<string, any> = {}) {
    return this.call('GET', 'voucher/get_voucher_list', { params });
  }
}
