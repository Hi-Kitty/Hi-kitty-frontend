import instance from '../axios';
import { DetailPostResponse, Response, RootResponse } from '../../types/post';

export const getForumAll = async (page: number = 0, size: number = 10) => {
  const { data } = await instance.get<RootResponse<Response>>(`boards?page=0&size=10`);
  return data;
};

export const getForumContent = async (boardId: number) => {
  const { data } = await instance.get<DetailPostResponse>(`/boards/${boardId}`);
  return data;
};
