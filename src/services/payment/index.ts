import type { AxiosResponse } from 'axios';
import { api } from '../apiClient';
import { v4 as uuidV4 } from 'uuid';

export interface Payment {
  rowIndex: number;
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  shippingMethod: 'bh' | 'correios';
  paymentMethod: 'pix' | 'cartao';
  message: string;
}

export const addPayment = async (values: Partial<Payment>) => {
    values['id'] = uuidV4();
    await api.post<void, AxiosResponse<Partial<Payment>>, Partial<Payment>>('payments', values);
}