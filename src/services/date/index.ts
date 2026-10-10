import { apiDate } from '../apiClient';

export interface DateApiResponse {
  datetime: string;
  unixtime: number;
  timezone: string;
}

export const getDate = async () => {
    const response = await apiDate.get<DateApiResponse>('/api/timezone/America/Sao_Paulo');
    return response.data;
}