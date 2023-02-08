import axios, { Axios, AxiosResponse } from 'axios';

export interface Getter {
  (path: string): (index: number) => Promise<AxiosResponse>
}

export const getFromSWAPI = (
  baseUrl: string = 'https://swapi.dev/api/',
  getFn: Axios['get'] = axios.get
): Getter => (
  path
) => async (
  index
) => getFn(`${baseUrl}${path}/${index}/`);
