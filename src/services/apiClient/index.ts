import axios from 'axios';

export interface SheetResponse<T> {
  results: T;
}

export const api = axios.create({
  baseURL: 'https://api.sheetson.com/v2/sheets',
  headers: {
    "Authorization": "Bearer AAW1YnW9xd6Bk9R9k09pWoH64boE1hADryJywmIZkXf18YB-2v1v5WWjJaY",
    "X-Spreadsheet-Id": "1jOrPfUHfvsZJT6m8-7uxq5wFfvKEHrciQl6rA_DXvRE"
  },
});


export const apiDate = axios.create({
  baseURL: "https://worldtime.timezone.io",
});