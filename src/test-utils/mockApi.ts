import fetchMock from 'fetch-mock';
import { API_HOST_URL } from 'js/constants/api/endpoints';
import { Dictionary } from 'js/types/dictionary';

export default (url: string, options: Dictionary<any>) => fetchMock.mock(`${API_HOST_URL}${url}`, options);
