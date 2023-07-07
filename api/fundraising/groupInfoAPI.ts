import instance from '../axios';
import { Response, RootResponse } from '../../types/info';

export const getGroupInfo = async (fundraiserId: number) => {
  const { data } = await instance.get<RootResponse<Response>>(`boards/fundraisers/${fundraiserId}?page=0&size=10`);
  return data;
};
